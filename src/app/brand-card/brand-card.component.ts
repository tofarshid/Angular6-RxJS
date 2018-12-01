import { Component, OnInit, Input } from '@angular/core';
import { Brands } from '../model/brand';
@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.css']
})
export class BrandCardComponent implements OnInit {
	@Input()
	brands: Brands[];
  constructor() { }

  ngOnInit() {
  }

}
