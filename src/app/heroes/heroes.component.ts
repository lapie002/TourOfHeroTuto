import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  /*tableau de Hero - mock-heroes*/
  heroes = hero[];

  /* var de type Hero */
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    /* this.heroes = this.heroService.getHeroes(); */
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
