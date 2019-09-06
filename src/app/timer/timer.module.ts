import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from '../timer/timer.component';
import { SharedModule } from '../shared';
import { TimerRoutingModule } from './timer-routing.module';



@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    SharedModule,
    TimerRoutingModule
  ],
  exports: [TimerComponent]
})
export class TimerModule { }
