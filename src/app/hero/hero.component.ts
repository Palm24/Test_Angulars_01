import { Component, OnInit } from '@angular/core';

// News
import { Profile } from './../profile';
import { Prohero } from './../profile-list'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  // number = 'ID';
  // name = 'Name';
  // type = 'Type hero';

  // Profile: Profile ={
  //   id: 1,
  //   name: 'Superman'
  // }

  heros = Prohero;
  selectedHero?: Profile;
  onSelect(hero: Profile): void {
    this.selectedHero = hero;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
