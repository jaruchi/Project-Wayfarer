import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {CITIES} from '../cities';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
  
export class CityComponent implements OnInit {
  cities: any = CITIES;
  city: any;
  posts: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.city = CITIES.find(city => {
          let paramId: string = params.get('id') || '';
          return city.id === parseInt(paramId);
        });
        this.posts = this.city.posts;
      });
  }

}
