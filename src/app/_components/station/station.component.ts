import { Component, OnInit, Input } from '@angular/core';
import { IStationData } from 'src/app/_model/IStationData';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  @Input() stationData: IStationData;
  constructor() { }

  ngOnInit() {
  }

}
