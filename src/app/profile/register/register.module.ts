import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { GoogleComponent } from './google/google.component';
import { FacebookComponent } from './facebook/facebook.component';

@NgModule({
  declarations: [
    RegisterComponent,
    FacebookComponent,
    GoogleComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
