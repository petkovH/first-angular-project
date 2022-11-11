import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFieldComponent {
  public searchData: string = '';
  public countE: number = 0;

  onKeydown(event: any) {
    this.countE = this.countE + 1
    console.log(this.countE);
  }
}
