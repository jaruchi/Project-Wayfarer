import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CITIES } from '../cities';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  cities: any = CITIES;
  posts: any = CITIES.flatMap(c => c.posts);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
