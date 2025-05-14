import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private hostName: string = ''
  private routeName: string = ''
  eventImages: string = ``
  constructor(private _HttpClient: HttpClient, private _GlobalService: GlobalService) {
    this.hostName = this._GlobalService.hostName;
    this.routeName = this._GlobalService.eventRoute;
    this.eventImages =this._GlobalService.eventImages;
  }

  getevents(limit: number = 8, page: number = 1): Observable<any> {
    return this._HttpClient.get(`${this.hostName}${this.routeName}?limit=${limit}&page=${page}`)
  }

  // getOneevent(id: string): Observable<any> {
  //   return this._HttpClient.get(`${this.hostName}${this.routeName}/${id}`)
  // }
}
