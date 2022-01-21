import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TopicComponent } from './topic/topic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


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
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: SiteHeaderComponent },
      //{path:'cities',component:CityComponent}
  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
