import { Component, input, output } from '@angular/core';

export type AppButtonVariant = 'primary' | 'secondary' | 'ghost';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.scss',
})
export class AppButtonComponent {
  readonly label = input.required<string>();
  readonly variant = input<AppButtonVariant>('primary');
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input(false);

  readonly clicked = output<MouseEvent>();

  protected onClick(event: MouseEvent): void {
    if (this.disabled()) {
      return;
    }

    this.clicked.emit(event);
  }
}
