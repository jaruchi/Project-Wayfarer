import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TopicComponent } from './topic/topic.component';
import { CitiesComponent } from './cities/cities.component';
import { PostsComponent } from './posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    GalleryComponent,
    TopicComponent,
    CitiesComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: '',
        component: GalleryComponent
      },
      {
          path: 'cities',
          component: CitiesComponent
      },
  ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
