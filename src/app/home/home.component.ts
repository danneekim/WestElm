import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: false, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {
  navigationItems: Array<any>;
  navigationArray: Array<any>;
  imagesArray: Array<any>;

  constructor(
    public httpService: HttpClient
  ) { }

  ngOnInit() {
    this.httpService.get('../../assets/data/content.json').subscribe(
      (data: any) => {
        this.navigationArray = [];
        this.imagesArray = [];
        this.navigationItems = data.groups as any [];
        this.navigationItems.forEach(element => {
          if(element.name.indexOf('&amp')){
            let linkTitle = '';
            linkTitle = element.name.replace(/&amp; Shams/g, '').replace(/&amp;/g, '-');
            element.name = linkTitle;
          }
          // if(element.hero){
          //   console.log(element.hero);
          //   this.imagesArray.push(element.hero);
          // }
        })
        this.navigationArray = this.navigationItems;
        console.log(this.navigationArray);
        
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
