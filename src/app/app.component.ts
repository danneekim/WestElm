import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'west-elm-app';

  constructor(
    public httpService: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpService.get('../../assets/data/content.json').subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}

