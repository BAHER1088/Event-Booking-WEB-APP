import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { EventService } from '../../services/event.service';
import { BookingService } from '../../services/booking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';


@Component({
  selector: 'app-event-details',
  imports: [NavbarComponent, FooterComponent, CurrencyPipe, DatePipe],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent implements OnInit, OnDestroy {
  subscription: any;
  id: string = '';
  imgDomain: string = '';
  event: any = {};
  errorMessage: string = ""
  tickets: number = 0;

  constructor(
    private _EventService: EventService,
    private _bookingService: BookingService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  loadEvent() {
    if (this.id && this.id.trim() !== '') {
      this.subscription = this._EventService.getOneEvent(this.id).subscribe({
        next: (res) => {
          this.event = res.data;
          console.log(this.event)
        }, error: (err) => {
          console.log(err)
        }
      })
    }
  }

  loadTickets() {
    this.subscription = this._bookingService.getUserTickets().subscribe({
      next: (res) => {
        this.tickets = res.data.NumOfTickets;
        console.log(this.tickets);
      }
    })
  }

  ngOnInit(): void {
    this.imgDomain = this._EventService.eventImages;
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this.loadEvent();
    });
    this.loadTickets();
  }

  book(id: string) {
    this.subscription = this._bookingService.bookEvent(id).subscribe({
      next: (res) => {
      }, error: (err) => {
        console.log(err)
        this.errorMessage = err.error.message;
      }
    })
  }

  ngOnDestroy(): void { 
      this.subscription.unsubscribe(); 
  }
}
