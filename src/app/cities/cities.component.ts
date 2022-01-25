import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { CitiesService } from '../service/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  cities: any = CITIES;

  // constructor() { }
  constructor(private citySvc: CitiesService) {}

  ngOnInit(): void {
    this.citySvc.getCities().subscribe((cities) => (this.cities = cities));
  }
}
