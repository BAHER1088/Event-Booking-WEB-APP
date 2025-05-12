import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { DescriptionPipe } from '../../pipes/description.pipe';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe, DatePipe, DescriptionPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  events: any[] = []
  imgDomain: string = "http://localhost:3000/uploads/"

  constructor(private _eventService: EventService) { }
  ngOnInit(): void {
    // this._eventService.getEvents().subscribe((res) => this.events = res.data)
    // this.imgDomain = this._eventService.imgDomain;
  }
}
