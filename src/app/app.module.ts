import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TopicComponent } from './topic/topic.component';
import { PostsComponent } from './posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityComponent } from './city/city.component';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    GalleryComponent,
    TopicComponent,
    CitiesComponent,
    PostsComponent,
    CityComponent,
    PostComponent,
    WeatherComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: GalleryComponent,
      },
      {
        path: 'cities',
        component: CitiesComponent,
        children: [
          {
            path: ':id',
            component: CityComponent,
          },
        ],
      },
      {
        path: 'post/:id/:index',
        component: PostComponent,
      },
      {
        path: 'posts/:searchterm',
        component: PostsComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
