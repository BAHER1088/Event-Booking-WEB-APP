import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { EventService } from '../../services/event.service';
import { MostPopularComponent } from '../most-popular/most-popular.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, RouterModule, MostPopularComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private _eventService: EventService ,private _AuthService :AuthService) { }

  ngOnInit(): void {
    this._AuthService.checkToken();
  }


}
