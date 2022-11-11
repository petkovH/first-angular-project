import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button-item',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleButtonComponent {
  @Input() text: string = '';

  @Input() color: string = '';
}
