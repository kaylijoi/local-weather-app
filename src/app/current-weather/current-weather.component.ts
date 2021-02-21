import { WeatherService } from './../weather.service';
import { ICurrentWeather } from './../icurrent-weather';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  constructor(private weatherService: WeatherService) {
    this.current = {
      city: '',
      country: '',
      data: new Date,
      image: '',
      description: '',
      temperature: 0
     
    }
    
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Redmond', 'US').subscribe(data => this.current = data)
  }

}
