import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
