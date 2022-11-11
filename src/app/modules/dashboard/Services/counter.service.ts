import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActiveCardsCount } from '../../core/interfaces/counter-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private activeCardsCount = new BehaviorSubject<ActiveCardsCount>({
    activeTotal: 0,
  });
  private _activeCardsCount$ = this.activeCardsCount.asObservable();

  getActiveCardsCount(): Observable<ActiveCardsCount> {
    return this._activeCardsCount$;
  }

  setActiveCardsCount(latestValue: ActiveCardsCount) {
    return this.activeCardsCount.next(latestValue);
  }
}
