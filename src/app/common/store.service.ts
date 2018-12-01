import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import { Course } from '../model/course';
import { Brands, Cars } from '../model/brand';
import { delayWhen, filter, map, retryWhen, shareReplay, tap, withLatestFrom } from 'rxjs/operators'; // some
import { createHttpObservable } from './util';
import { fromPromise } from 'rxjs/internal-compatibility'; // ?

@Injectable({
  providedIn: 'root'
})
export class Store {

  private subject = new BehaviorSubject<Brands[]>([]);
  brands$: Observable<Brands[]> = this.subject.asObservable();

  init () {
  	// const url: string = 'http://simpleideas.com.au/book-data/course.json';
  	const url: string = 'http://localhost:4001/payload'
  	const http$ = createHttpObservable(url);

  	http$
  	    .pipe(
  	        tap(() => console.log('HTTP request executed')),
  	        map(res => Object.values(res))
  	    )
  	    .subscribe(
  	        brands => { this.subject.next(brands); }
  	    );
  }

  constructor() { }
}
