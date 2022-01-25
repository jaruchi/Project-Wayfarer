import { Injectable } from '@angular/core';
import { CITIES as CITIES_A } from './cities';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  citis = CITIES_A;
  constructor() { }

  getCities() {
    return of(this.citis);
  }

  // find which city - pass city id for which post to be added
  // new post
  addNewPost(city_id: any, post_title: any, post_author: any, post_comment: any): void {

    if (post_title.length < 1 || post_title.length > 200) {
      alert('Title should be between 1 and 200');
    } else if (!post_comment) {
      alert('Comments cannot be empty');
    } else {

    let newpost: any = {
      title: post_title,
      comment: post_comment,
      author: post_author,
      createdDate: new Date(),
    };
    let city = this.citis.find((c) => c.id === city_id);
    city?.posts.push(newpost);
  }
}
}
