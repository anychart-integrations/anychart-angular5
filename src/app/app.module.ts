/// <reference path="../../node_modules/anychart/dist/index.d.ts"/>


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataPickerComponent } from './data-picker/data-picker.component';
import { DemoDataProviderService } from './demo-data-provider.service';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DataPickerComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DemoDataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
