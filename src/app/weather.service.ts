import { ICurrentWeatherData } from './icurrent-weather-data';
import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string) {
    return this.httpClient.get<ICurrentWeatherData>(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`)
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    
  }
}
