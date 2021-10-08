import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToDate'
})
export class NumberToDatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    // var formatter = new Intl.DateTimeFormat('pt-BR');
    // return formatter.format(value * 1000);

    const date = new Date(value * 1000);
    const dateFormat = this.zero(date.getDate(),2) + '/' +
                      this.zero((date.getMonth() + 1),2) + '/' +
                      this.zero(date.getFullYear(),4) + ' ' +
                      this.zero(date.getHours(),2) + ':' +
                      this.zero(date.getMinutes(),2) + ':' +
                      this.zero(date.getSeconds(),2)

    return dateFormat
  }

  zero(value: number, length: number): string {
    const rest = length - String(value).length;
    return '0'.repeat(rest).concat(value + '')
  }

}
