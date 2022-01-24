import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  searchterm: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  action(){
    this.router.navigate(['/posts/' + this.searchterm]);
 }

}
