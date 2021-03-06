import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  /* var de type Hero */
  selectedHero: Hero;
  /*tableau de Hero - mock-heroes*/
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  /* Dead code : methode (click)="onSelect(hero)"
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */

  getHeroes(): void {
    /* this.heroes = this.heroService.getHeroes(); */
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
