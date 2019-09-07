import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private timerDate: Date;
  private timerInterval;
  private timerSubject: BehaviorSubject<Date>;
  private isActive: boolean;
  timer$: Observable<Date>;

  constructor() {
    this.timerSubject = new BehaviorSubject<Date>(null);
    this.timer$ = this.timerSubject.asObservable();
    this.Reset();
  }

  public Start() {
    this.isActive = true;
    this.timerInterval = setInterval(() => {
      this.timerDate.setSeconds(this.timerDate.getSeconds() + 1);
      this.dateBroadcast();
    }, 1000);
  }

  public Stop() {
    this.isActive = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  public Toggle() {
    if (this.isActive) {
      this.Stop();
    } else {
      this.Start();
    }
  }

  public Reset() {
    this.Stop();
    this.isActive = false;
    this.timerDate = new Date(0);
    this.timerInterval = null;
    this.dateBroadcast();
  }

  private dateBroadcast() {
    const dateClone = new Date(this.timerDate);
    this.timerSubject.next(dateClone);
  }
}
