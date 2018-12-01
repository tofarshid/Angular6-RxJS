import { Component, OnInit } from '@angular/core';
import { Brands } from '../model/brand';
import {Router, ActivatedRoute, NavigationEnd} from "@angular/router";
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {Store} from '../common/store.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  getBrands$: Observable<Brands[]>;
  currentBrandId: number;

  constructor( private router: Router, private route: ActivatedRoute, private store:Store) {

	}

  ngOnInit() {
  	this.getBrands$ = this.store.brands$;
	this.route.params.subscribe(routeParams => {
		console.log(routeParams.id);
		this.currentBrandId = routeParams.id;
	});
  }
}
