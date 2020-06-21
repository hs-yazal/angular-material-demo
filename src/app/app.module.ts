import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';

 

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
