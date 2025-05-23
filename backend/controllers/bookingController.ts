import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import bookingModel from "../Models/bookingModel";
import eventModel from "../Models/eventModel";
import { utils } from "../middlwares/features";
import customErrors from "../middlwares/Errors";

export const bookEvent = asyncHandler(async (req: any, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.user?._id;
  const eventId = req.params.id;

  const event = await eventModel.findById(eventId);
  if (!event) {
    res.status(404).json({ message: req.t("event_not_exist") })
  }

  const existingBook = await bookingModel.findOne({ userId: userId, eventId: eventId })
  if (existingBook) {
    existingBook.numOfTickets! += 1;
    await existingBook.save();
    res.status(201).json({
      message: req.t("congrats_enjoy_event")
    })
    return;

  }

  const newBook = await bookingModel.create(
    {
      userId: userId,
      eventId: eventId,
      eventName: event?.name,
      price: event?.price,
      eventDate:event?.date,
      refCode: new utils().generateReferenceCode(),
      createdAt: Date.now()
    }
  );

  res.status(201).json({
    message: req.t("congrats_enjoy_event"),
    data: newBook
  })

});


export const getUserTickets = asyncHandler(async (req: any, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.user?._id;

  const tickets = await bookingModel.find({ userId: userId });

  if (tickets.length == 0) {
    res.status(404).json({ message: req.t("no_ticket") });
    return;
  }
  res.status(200).json({ message: req.t("ticket_found"), data: tickets });
});

export const getEventTickets = asyncHandler(async (req: any, res: Response, next: NextFunction): Promise<void> => {
  const eventId = req.params.id;
  const tickets = await bookingModel.find({ eventId: eventId });

  if (tickets.length == 0) {
    res.status(404).json({ message: req.t("no_tickets_yet") });
    return;
  }
  res.status(200).json({ message: req.t("tickets_found"), data: tickets });
});

export const deleteTicket = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const Id = req.params.id;
  const ticket = await bookingModel.findById(req.params.id);
  if (!ticket) {
    return next(new customErrors(req.t("ticket_not_found"), 404))
  }
  if (ticket.numOfTickets! > 1){
    ticket.numOfTickets= ticket.numOfTickets!-1;
    ticket.save();
    res.status(204).json({ message: req.t("deleted_successfully") });
    return;

  }
  if (ticket.numOfTickets = 1){
    await bookingModel.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: req.t("deleted_successfully") });
    return;
  }
   res.status(404).json({ message: req.t("Error in delete ticket") });
  
  
});