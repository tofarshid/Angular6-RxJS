import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MatTabsModule } from '@angular/material/tabs';

import {
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatGridListModule
} from "@angular/material";

import {HttpClientModule} from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { LayoutModule } from '@angular/cdk/layout';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CarListComponent } from './car-list/car-list.component';
import { BrandComponent } from './brand/brand.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        AppRoutingModule,
        MatSelectModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

echo "# Angular6-RxJS" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/tofarshid/Angular6-RxJS.git
git push -u origin master

*/