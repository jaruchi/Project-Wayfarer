import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';
import { CitiesService } from '../service/cities.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  cities: any[] = [];
  posts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private cityService: CitiesService
  ) {}

  ngOnInit(): void {
    this.cityService.getCities().subscribe((cities) => (this.cities = cities));

    this.route.paramMap.subscribe((params) => {
      let searchterm = params.get('searchterm') || '';
      searchterm = searchterm.toLowerCase();

      let allposts = this.cities.flatMap((city) => {
        let citiesposts:any[] = city.posts;
        let postWithCity = citiesposts.map((post, index) => {
          return {
            cityId: city.id,
            cityName: city.name,
            postIndex: index,
            title: post.title,
            author: post.author,
            comment: post.comment,
            imageUrl: post.imageUrl,
          };
        });
        return postWithCity;
      });

      let filtertedPosts = allposts.filter((p) => {
        return (
          p.title.toLowerCase().includes(searchterm) ||
          p.author.toLowerCase().includes(searchterm) ||
          p.comment.toLowerCase().includes(searchterm)
        );
      });
      this.posts = filtertedPosts;
    });
  }
}
