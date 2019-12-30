import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'west-elm-app';
  scrollY = 0;
  
  private eventOptions: boolean|{capture?: boolean, passive?: boolean};
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.scrollY = window.pageYOffset
  } 

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (): void => {
    const number = this.scrollY;
    console.log(number);
    if (number > 100 ){
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  public scrollUp(element: any): void {
    element.scrollIntoView(true);
  }

}

