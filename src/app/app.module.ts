import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
// about
import { MatTabsModule } from '@angular/material/tabs';
// course
// course list
import {
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
// course dialogue
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {MatMomentDateModule} from "@angular/material-moment-adapter"; ???????

import { LayoutModule } from '@angular/cdk/layout';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CarListComponent } from './car-list/car-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarListComponent
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
        ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponent: [CourseDialogComponent]
})
export class AppModule { }
