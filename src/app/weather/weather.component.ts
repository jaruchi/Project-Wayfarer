import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { CITIES } from '../cities';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  cities: any = CITIES;

  @Input() city: any;

  weather: any;
  searchSubject = new Subject();

  constructor(private http: HttpClient) {}

  findWeather(cityName: any): any {
    this.http
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`
      )
      .subscribe((response) => (this.weather = response));
  }

  ngOnChanges(): void {
    this.findWeather(this.city);
  }

  ngOnInit(): void {}
}
