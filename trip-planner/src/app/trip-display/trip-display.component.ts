import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-display',
  templateUrl: './trip-display.component.html',
  styleUrls: ['./trip-display.component.css'],
})
export class TripDisplayComponent {
  @Input() trips: { start: string; end: string }[] = [];

  getTripClass(index: number): string {
    if (index === 0) return 'level-1';
    if (this.trips[index - 1].end === this.trips[index].start) return 'level-1';
    if (
      this.trips[index - 1].start === this.trips[index].start &&
      this.trips[index - 1].end === this.trips[index].end
    )
      return 'level-2';
    return 'level-1 arrow';
  }
}
