import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanToStringPipe } from './boolean-to-string.pipe';
import { NumberToDatePipe } from './number-to-date.pipe';
import { LocaldateToDatePipe } from './localdate-to-date.pipe';



@NgModule({
  declarations: [
    BooleanToStringPipe,
    NumberToDatePipe,
    LocaldateToDatePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooleanToStringPipe,
    NumberToDatePipe,
    LocaldateToDatePipe,

  ]
})
export class PipeModule { }
