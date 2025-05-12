import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-all-events',
  imports: [NavbarComponent, FooterComponent, CardComponent],
  templateUrl: './all-events.component.html',
  styleUrl: './all-events.component.scss'
})
export class AllEventsComponent {

}
