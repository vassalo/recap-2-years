import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss',
})
export class SectionContainerComponent {
  readonly title = input<string>();
  readonly sectionId = input<string>();
  readonly subtle = input(false);
}
