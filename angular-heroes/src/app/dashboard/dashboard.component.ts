import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service'
import { Hero } from '../hero'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService:HeroService) { }
  
  minHeroes:Hero[];

  ngOnInit() {
     this.getMinHeroes()
  }
  getMinHeroes(){
    this.heroService.getHeroes().then(
      (heroes)=>{
         this.minHeroes = heroes.slice(1,5)
      }
    )
  }

}
