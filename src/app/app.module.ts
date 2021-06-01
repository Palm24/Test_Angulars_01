import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ต่อจากไฟล์ server.js 4.1 เพิ่ม import { HttpClientModule } from "@angular/common/http"; เข้าไป
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WorkComponent } from './work/work.component';
import { HeroComponent } from './hero/hero.component';
// import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    ProductComponent,
    AboutComponent,
    PagenotfoundComponent,
    WorkComponent,
    HeroComponent,
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
