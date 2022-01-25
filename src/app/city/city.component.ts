import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';
import { CitiesService } from '../service/cities.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  cities: any[] = [];
  city: any;
  posts: any[] = [];
  new_post_title = '';
  new_post_comment = '';
  new_post_author = '';

 
  constructor(
    private route: ActivatedRoute,
    private cityService: CitiesService
  ) { }
  

  addNewPost() {
    

    this.cityService.addNewPost(
      this.city.id,
      this.new_post_title,
      this.new_post_author,
      this.new_post_comment
    );
  }
  ngOnInit(): void {
    this.cityService.getCities().subscribe((cities) => (this.cities = cities));

    this.route.paramMap.subscribe((params) => {
      this.city = this.cities.find((city) => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      });
      this.posts = this.city.posts;
      this.posts = this.posts.sort().reverse();
    });
  }
}
