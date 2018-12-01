import { Component, OnInit, Input } from '@angular/core';
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import { Brands, Cars } from '../model/brand';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input()
  cars: Observable<Cars[]>
  constructor() { }

  ngOnInit() {
  }

}
