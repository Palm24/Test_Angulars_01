import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // name = 'Home page';
  backgroundUrl="https://www.img.in.th/images/123abe8234625411593575a22dd68fd0.jpg"
  // backgroundUrl="./assets/images/1_3.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
