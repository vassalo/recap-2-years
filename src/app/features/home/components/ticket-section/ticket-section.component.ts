import { Component, computed, signal } from '@angular/core';

import { AppButtonComponent } from '../../../../shared/components/app-button/app-button.component';
import { TICKET_SECTION } from '../../data/home.data';

@Component({
  selector: 'app-ticket-section',
  imports: [AppButtonComponent],
  templateUrl: './ticket-section.component.html',
  styleUrl: './ticket-section.component.scss',
})
export class TicketSectionComponent {
  readonly sectionId = signal('season-ticket');

  protected readonly ticket = TICKET_SECTION;
  protected readonly unlocked = signal(false);

  protected readonly buttonLabel = computed(() =>
    this.unlocked()
      ? this.ticket.unlockedButtonLabel
      : this.ticket.buttonLabel,
  );

  protected unlockSeason(): void {
    if (this.unlocked()) {
      return;
    }

    this.unlocked.set(true);
  }
}
