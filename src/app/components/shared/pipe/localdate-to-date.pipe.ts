import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localdateToDate'
})
export class LocaldateToDatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    const date = new Date(value);
    date.setDate(date.getDate() + 1)

    const dateFormat = this.zero(date.getDate(),2) + '/' +
                      this.zero((date.getMonth() + 1),2) + '/' +
                      this.zero(date.getFullYear(),4)

    return dateFormat
  }

  zero(value: number, length: number): string {
    const rest = length - String(value).length;
    return '0'.repeat(rest).concat(value + '')
  }

}
