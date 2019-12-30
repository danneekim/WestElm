import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'west-elm-app';
  scrollY = 0;
  showButton: boolean = false;
  
  private eventOptions: boolean|{capture?: boolean, passive?: boolean};
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.scrollY = window.pageYOffset
  } 

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy(): void {
    window.addEventListener('scroll', this.scrollEvent, false);
  }

  scrollEvent = (): void => {
    const number = this.scrollY;
    if (number >= 250 && window.pageYOffset != 0){
      this.showButton = true;
    } 
    else {
      this.showButton = false
    }
  }

  public scrollUp(element: any): void {
    element.scrollIntoView(true);
  }

}

