import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ProductFilterPipe }  from './products/product-filter.pipe';
import { StarComponent }  from './shared/star.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule 
  ],
  declarations: [ 
      AppComponent, 
      ProductListComponent,
      ProductFilterPipe,
      StarComponent
    ],
=======

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
>>>>>>> ddcc5cd563fe51aac52e4097eb02c92e0a1c34c1
  bootstrap: [ AppComponent ]
})
export class AppModule { }
