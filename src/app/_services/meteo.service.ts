import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IStationData } from '../_model/IStationData';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  public getStationData() {

    const url = environment.meteoServiceURL;
    
    return this.http.get<IStationData[]>(url);
  }
}
