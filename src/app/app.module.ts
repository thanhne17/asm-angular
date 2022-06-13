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
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminNavbarComponent } from './components/navbar/admin-navbar/admin-navbar.component';
import { AdminBlogComponent } from './page/admin/admin-blog/admin-blog.component';
import { AdminWorkComponent } from './page/admin/admin-work/admin-work.component';
import { AdminBlogAddComponent } from './page/admin/admin-blog-add/admin-blog-add.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiteLayoutComponent,
    HomePageComponent,
    BlogPageComponent,
    WorkPageComponent,
    FooterComponent,
    AdminLayoutComponent,
    SidebarComponent,
    AdminNavbarComponent,
    AdminBlogComponent,
    AdminWorkComponent,
    AdminBlogAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
