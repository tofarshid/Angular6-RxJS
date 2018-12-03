import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from "./brand/brand.component";

const routes: Routes = [
	{
		path: "",
		component: BrandComponent
	},
	{
		path: 'brand',
		component: BrandComponent
	},
	{
		path: 'brand/:id',
		component: BrandComponent
	}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
