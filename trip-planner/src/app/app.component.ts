import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trips: { start: string, end: string }[] = [];

  addTrip(trip: { start: string, end: string }) {
    this.trips.push(trip);
  }
}
