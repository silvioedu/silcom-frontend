import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() {
    // intentionally unscoped
  }

  convertFromInputToNumber(value: string): number {
    return parseFloat(value.replace(",",".").replace(/R\$/gi,''))
  }

  convertFromNumberToInput(value: number): string {
    return `R$ ${value.toFixed(2).toString().replace(".",",")}`
  }

}
