import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', 
    component: ProfileComponent, 
    // children: [
    //   { path: 'login', component: LoginComponent },
    //   { path: 'register', 
    //     loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
    //   { path: '',
    //     redirectTo: 'profile',
    //     pathMatch: 'full'
    //   }
    // ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  { path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
