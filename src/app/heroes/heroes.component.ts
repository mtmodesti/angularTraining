import { HeroService } from './../hero.service';
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

  heroes: IHero[] = [];

  selectedHero?: IHero;

  constructor(private heroservice: HeroService) {


  }
  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect( hero: IHero) {
    this.selectedHero = hero;
  }

  getHeroes():void {
    this.heroservice.getHeroes().subscribe(
      heroes => this.heroes = heroes
    )
  }
}
