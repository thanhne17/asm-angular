import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { WorkPageComponent } from './page/work-page/work-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiteLayoutComponent,
    HomePageComponent,
    BlogPageComponent,
    WorkPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
