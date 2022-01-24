import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  cities: any[] = CITIES;
  posts: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let searchterm = params.get('searchterm') || '';
      searchterm = searchterm.toLowerCase();

      let allposts = CITIES.flatMap((city) => {
        let citiesposts = city.posts;
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
