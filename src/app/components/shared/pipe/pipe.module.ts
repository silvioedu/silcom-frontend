import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanToStringPipe } from './boolean-to-string.pipe';
import { NumberToDatePipe } from './number-to-date.pipe';



@NgModule({
  declarations: [
    BooleanToStringPipe,
    NumberToDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooleanToStringPipe,
    NumberToDatePipe
  ]
})
export class PipeModule { }
