import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TopicComponent } from './topic/topic.component';
import { CitiesComponent } from './cities/cities.component';
import { PostsComponent } from './posts/posts.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }