import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
import { ActivatedRoute, Params } from "@angular/router"
import { HeroService } from '../hero.service'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero
  id: number
  constructor(private activatedRouter: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.heroService.getHero(this.id).then(
          (hero) => { this.hero = hero }
        )
      }
    )

  }
}
