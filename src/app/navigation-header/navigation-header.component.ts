import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {
  navigationItems: Array<any>;
  navigationArray: Array<any>;

  constructor(
    public httpService: HttpClient
  ) { }

  ngOnInit() {
    this.httpService.get('../../assets/data/content.json').subscribe(
      data => {
        this.navigationArray = [];
        this.navigationItems = data.groups;
        this.navigationItems.forEach(element => {
          if(element.name.indexOf('&amp')){
            let linkTitle = '';
            linkTitle = element.name.replace(/&amp; Shams/g, '').replace(/&amp;/g, '-');
            element.name = linkTitle;
          }
          this.navigationArray = this.navigationItems;
        })
        
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
