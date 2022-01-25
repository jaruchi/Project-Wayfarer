import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';
import { CitiesService } from '../service/cities.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: any;
  city: any;
  cities: any[]=[];
  
  constructor(private route: ActivatedRoute, private cityService: CitiesService) {}
  
  ngOnInit(): void {

    this.cityService.getCities().subscribe((cities) => (this.cities = cities));

    this.route.paramMap.subscribe((params) => {
      this.city = this.cities.find((city) => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      });
      const idx = parseInt(params.get('index') || '0');
      if (this.city) {
        this.post = this.city.posts[idx];
      }
    });
  }
}
