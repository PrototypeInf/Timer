import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
