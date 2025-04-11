import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TripInputComponent } from './trip-input/trip-input.component';
import { TripDisplayComponent } from './trip-display/trip-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TripInputComponent,
    TripDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Add FormsModule to imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
