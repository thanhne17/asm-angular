import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AdminBlogAddComponent } from './page/admin/admin-blog-add/admin-blog-add.component';
import { AdminBlogComponent } from './page/admin/admin-blog/admin-blog.component';
import { AdminWorkComponent } from './page/admin/admin-work/admin-work.component';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { WorkPageComponent } from './page/work-page/work-page.component';

const routes: Routes = [
  {
    path: "",
    component: SiteLayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      },
      {
        path: "blog",
        component: BlogPageComponent
      },
      {
        path: "work",
        component: WorkPageComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "blog",
        component: AdminBlogComponent
      },
      {
        path: "blog/add",
        component: AdminBlogAddComponent
      },
      {
        path: "blog/:id/edit",
        component: AdminBlogAddComponent
      },
      {
        path: "work",
        component: AdminWorkComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
