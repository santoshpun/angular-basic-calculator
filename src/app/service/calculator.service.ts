import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  public add(a: number, b: number): number {
    let result = a + b;
    return result;
  }

  public subtract(a: number, b: number): number {
    let result = a - b;
    return result;
  }
}
