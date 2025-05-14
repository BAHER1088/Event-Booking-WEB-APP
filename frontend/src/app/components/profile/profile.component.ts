import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy{
  constructor(private _bookingService: BookingService,private _eventService: EventService, private _AuthService: AuthService) { }

  subscription: any;
  imgDomain: string = '';
  event: any = {};
  tickets: any[] = [];
  eventId:string ="";
  
  errorMessage:string = "";
  loadTickets() {
    this.subscription = this._bookingService.getUserTickets().subscribe({
      next: (res) => {
      this.tickets = res.data;
       }, error: (err) => {
          this.errorMessage = err.error.message;
      }
    }) 
  }
  
  
  
  ngOnInit(): void {
    this._AuthService.checkToken();
    this.imgDomain = this._eventService.eventImages;
    this.loadTickets();
  }

  ngOnDestroy(): void { this.subscription.unsubscribe() }

}
