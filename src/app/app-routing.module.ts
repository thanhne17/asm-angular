import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AdminBlogAddComponent } from './page/admin/admin-blog-add/admin-blog-add.component';
import { AdminBlogComponent } from './page/admin/admin-blog/admin-blog.component';
import { AdminWorkAddComponent } from './page/admin/admin-work-add/admin-work-add.component';
import { AdminWorkComponent } from './page/admin/admin-work/admin-work.component';
import { BlogDetailComponent } from './page/blog-detail/blog-detail.component';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { WorkDetailComponent } from './page/work-detail/work-detail.component';
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
      },
      {
        path: "work/:id",
        component: WorkDetailComponent
      },
      {
        path: "blog/:id",
        component: BlogDetailComponent
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
      },
      {
        path: "work/add",
        component: AdminWorkAddComponent
      },
      {
        path: "work/:id/edit",
        component: AdminWorkAddComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
