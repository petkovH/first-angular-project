import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../Services/counter.service';
import { ActiveCardsCount } from 'src/app/modules/core/interfaces/counter-interfaces';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  public activeCardsCount$!: Observable<ActiveCardsCount>;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.activeCardsCount$ = this.counterService.getActiveCardsCount();
  }
}
