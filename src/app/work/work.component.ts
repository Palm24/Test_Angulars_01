import { Component, OnInit } from '@angular/core';

// New
import { works } from './../work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  work = works;

  constructor() { }

  ngOnInit(): void {
  }

}
