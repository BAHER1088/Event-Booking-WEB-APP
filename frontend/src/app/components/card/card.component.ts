import { Component, Input } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe, DatePipe, DescriptionPipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() event: any;
  imgDomain: string = '';

  constructor(private _eventService: EventService , private _dataService :DataService) {
    this.imgDomain = this._eventService.eventImages;
  }
  setId(id:string){
    this._dataService.seteventID(id);
  }
}
