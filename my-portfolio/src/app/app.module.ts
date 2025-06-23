import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CvComponent } from './components/cv/cv/cv.component';
import { AboutComponent } from './components/about/about/about.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, FooterComponent, CvComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
