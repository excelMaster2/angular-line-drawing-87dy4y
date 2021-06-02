import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SheetJSComponent } from './sheet.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent, HelloComponent, SheetJSComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
