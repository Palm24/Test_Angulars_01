import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { ProfileComponent } from './profile/profile.component';
import { WorkComponent } from './work/work.component';

// ตัวจัดการ การ routing page ต่าง ๆ
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'profile',
  //  component: ProfileComponent,
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
