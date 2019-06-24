import { MeteoService } from './../../_services/meteo.service';
import { Component, OnInit } from '@angular/core';
import { IStationData } from 'src/app/_model/IStationData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stationData: IStationData[];
  constructor() { }

  ngOnInit() {

  }

}
