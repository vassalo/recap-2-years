import { Component, signal } from '@angular/core';

import { MESSAGES_SECTION } from '../../data/home.data';

@Component({
  selector: 'app-messages-section',
  templateUrl: './messages-section.component.html',
  styleUrl: './messages-section.component.scss',
})
export class MessagesSectionComponent {
  readonly sectionId = signal('season-messages');

  protected readonly messages = MESSAGES_SECTION;
}
