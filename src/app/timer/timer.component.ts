import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from './timer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  timer: Date;

  constructor(public timerService: TimerService) { }

  ngOnInit() {
    this.timerService.timer$.subscribe((date) => {
      this.timer = date;
    });
  }

  toggle() {
    this.timerService.Toggle();
  }

  stop() {
    this.timerService.Stop();
  }

  reset() {
    this.timerService.Reset();
  }

  ngOnDestroy() {
    this.timerService.Reset();
  }
}
