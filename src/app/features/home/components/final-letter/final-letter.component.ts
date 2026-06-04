import { Component, signal } from '@angular/core';

import { FINAL_LETTER } from '../../data/home.data';

@Component({
  selector: 'app-final-letter',
  templateUrl: './final-letter.component.html',
  styleUrl: './final-letter.component.scss',
})
export class FinalLetterComponent {
  readonly sectionId = signal('season-letter');

  protected readonly letter = FINAL_LETTER;
}
