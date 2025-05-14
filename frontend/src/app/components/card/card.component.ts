import { Component, Input } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe, DatePipe, DescriptionPipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() event: any;
  imgDomain: string = '';
  isAdmin: boolean = false;

  constructor(private _eventService: EventService , private _dataService :DataService , private _authService: AuthService) {
    this.imgDomain = this._eventService.eventImages;
    this.isAdmin = this._authService.isAdmin();
  }
  setId(id:string){
    this._dataService.setEventID(id);
  }
}
