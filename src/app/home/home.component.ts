import { Component, OnInit } from '@angular/core';
import { Brands } from '../model/brand';
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

  constructor( private store:Store) { }

  ngOnInit() {

  	this.getBrands$ = this.store.brands$;
  }

}
