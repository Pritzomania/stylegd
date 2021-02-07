import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestlibModule } from 'testlib';
import { Testlib2Module } from 'testlib2';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestlibModule,
    Testlib2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
