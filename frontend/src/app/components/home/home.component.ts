import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, RouterModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    // this._eventService.getEvents().subscribe((res) => this.events = res.data)
  }


}
