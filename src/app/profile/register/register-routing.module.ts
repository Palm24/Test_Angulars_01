import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoogleComponent } from './google/google.component';
import { FacebookComponent } from './facebook/facebook.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  { path: '',
    component: RegisterComponent,
    // children: [
    //   { path: 'facebook', component: FacebookComponent },
    //   { path: 'google', component: GoogleComponent },
    //   { path: '', 
    //     redirectTo: 'register',
    //     pathMatch: 'full'
    //   }
    // ]
  },
  { path: 'google',component: GoogleComponent },
  { path: 'facebook', component: FacebookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
