import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-trip-input',
  templateUrl: './trip-input.component.html',
  styleUrls: ['./trip-input.component.css']
})
export class TripInputComponent {
  startPoint: string = '';
  endPoint: string = '';
  @Output() tripAdded = new EventEmitter<{ start: string, end: string }>();

  addTrip() {
    this.tripAdded.emit({ start: this.startPoint, end: this.endPoint });
    this.startPoint = '';
    this.endPoint = '';
  }
}
