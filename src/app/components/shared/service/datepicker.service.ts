import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatepickerService {

  constructor() {
    // intentionally unscoped
  }

  convertFromFullDateToDate(value: any): string {
    var formatter = new Intl.DateTimeFormat('pt-BR');
    var date = formatter.format(value);
    return date.substr(0,2) + '/' +
          date.substr(3,2) + '/' +
          date.substr(6,4)
  }

  convertBRDateToUSDate(date: any) : string {
    return date.substr(6,4) + '-' +
          date.substr(3,2) + '-' +
          date.substr(0,2)
  }

  convertUSDateToBRDate(date: any) : string {
    return date.substr(8,2) + '/' +
          date.substr(5,2) + '/' +
          date.substr(0,4)
  }

}
