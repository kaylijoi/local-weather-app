import { ICurrentWeather } from './../icurrent-weather';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor() {
    this.current = {
      city: 'Redmond',
      country: 'USA',
      date: new Date(),
      image: '',
      temperature: 30,
      description: 'Snowy'
    }
  }

  ngOnInit(): void {
  }

}
