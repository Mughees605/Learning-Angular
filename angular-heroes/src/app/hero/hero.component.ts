import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  title = 'Tour of heroes';
  heroes: Hero[]
  selectedHero: Hero
  onSelected(hero: Hero) {
    this.selectedHero = hero
  }
  constructor(private heroservice: HeroService) { }
  ngOnInit() {
    this.getHeroes()
  }

  getHeroes() {
    this.heroes = this.heroservice.getAllHeroes()
  }
}
