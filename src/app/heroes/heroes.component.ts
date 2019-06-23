import { HeroService } from '../services/hero/hero.service';
import { Hero } from './../classes/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
     this.heroService.get()
     .subscribe(heroes => (this.heroes = heroes));
  }

}
