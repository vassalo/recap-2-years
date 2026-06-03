import { Component, signal } from '@angular/core';

import { SEASON_TRIPS, TRAVEL_SECTION } from '../../data/home.data';

@Component({
  selector: 'app-travel-section',
  templateUrl: './travel-section.component.html',
  styleUrl: './travel-section.component.scss',
})
export class TravelSectionComponent {
  readonly sectionId = signal('season-travel');

  protected readonly travelSection = TRAVEL_SECTION;
  protected readonly trips = SEASON_TRIPS;
  protected readonly failedImages = signal<ReadonlySet<string>>(new Set());

  protected getImageAlt(tripTitle: string): string {
    return `Viagem para ${tripTitle}`;
  }

  protected onImageError(tripTitle: string): void {
    this.failedImages.update((current) => new Set([...current, tripTitle]));
  }

  protected hasImageError(tripTitle: string): boolean {
    return this.failedImages().has(tripTitle);
  }
}
