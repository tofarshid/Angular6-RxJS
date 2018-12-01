import { Component, OnInit } from '@angular/core';
import { Brands, Cars } from '../model/brand';
import {Router, ActivatedRoute, NavigationEnd} from "@angular/router";
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, finalize, map, retryWhen, shareReplay, tap, find, filter} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {Store} from '../common/store.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carBrands$: Observable<Brands[]>;

  cars$: Observable<Cars[]>;

  constructor( private router: Router, private route: ActivatedRoute, private store:Store) {}

  ngOnInit() {

  	this.carBrands$ = this.store.brands$;

	this.route.params.subscribe(routeParams => {

		this.cars$ = this.loadCars().pipe(
			map(result => {  
				return result
					.filter(car => routeParams.id ? car.brandId == routeParams.id : car );
				}
			)
		);
		this.cars$.subscribe();
	});
  }

  loadCars(): Observable<Cars[]> {

  	return createHttpObservable(`http://localhost:4002/payload`);
  }

}
