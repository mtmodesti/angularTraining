import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: IHero = {
    id: 1,
    name: 'Windstorm',
  };

  heroes = HEROES;

  selectedHero?: IHero;

  constructor() {}
  ngOnInit(): void {}

  onSelect(hero: IHero) {
    this.selectedHero = hero;
  }
}
