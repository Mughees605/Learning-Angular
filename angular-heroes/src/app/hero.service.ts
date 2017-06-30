import { Hero } from './hero'
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/toPromise';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Injectable()
export class HeroService {

  constructor (private http:Http){}
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'api/heroes';  // URL to web api


  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES)
  }

  getHeroesFromHtpp():Promise<any[]>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
    .toPromise()
    .then(response=> response.json().data as any[] )
    .catch(this.handleError)
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id))
  }
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}