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
import { BlogDetailComponent } from './page/blog-detail/blog-detail.component';
import { AdminWorkAddComponent } from './page/admin/admin-work-add/admin-work-add.component';
import { WorkDetailComponent } from './page/work-detail/work-detail.component';
import { RouterModule } from '@angular/router';


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
    BlogDetailComponent,
    AdminWorkAddComponent,
    WorkDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
