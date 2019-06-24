import { Component, OnInit } from '@angular/core';
import { IStationData } from 'src/app/_model/IStationData';
import { MeteoService } from 'src/app/_services/meteo.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  stationData: IStationData[];
  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
    this.meteoService.getStationData().subscribe(data => {
      this.stationData = data;
    });
  }

}
