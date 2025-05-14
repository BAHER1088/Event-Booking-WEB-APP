import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-most-popular',
  imports: [CurrencyPipe,DatePipe,DescriptionPipe ,RouterLink],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.scss'
})
export class MostPopularComponent implements OnInit, OnDestroy{
subscription: any;
  imgDomain: string = '';
  events:  any[] = [];

  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this.imgDomain = this._eventService.eventImages;
      console.log(this.imgDomain);
    this.subscription = this._eventService.getevents(8, 2).subscribe((res) => {
      this.events = res.data;
      console.log(this.events);
      console.log(this.imgDomain+this.events[0].image);
    })
  }

  ngOnDestroy(): void { this.subscription.unsubscribe() }

}
