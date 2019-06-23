import { MessageService } from '../message/message.service';
import { HEROES } from '../../mock/mock-heroes';
import { Hero } from '../../classes/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  get(): Observable <Hero[]> {
    this.messageService.add('HeroService: Fetched Heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Fetched Hero with id: ${id}`);
    return of(HEROES.find(hero => hero.id === id));

  }
}
