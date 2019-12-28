import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { HomeComponent } from './home/home.component';

// third party imports
import {CarouselModule} from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // ngx-bootstep
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
