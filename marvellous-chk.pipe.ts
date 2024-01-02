import { Pipe, PipeTransform } from '@angular/core';
import { notDeepEqual } from 'node:assert';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {
transform(value: number, checkType: string): string {
  
  if (isNaN(value) || !Number.isInteger(value)) {
    return 'Invalid input';
  }

  switch (checkType.toLowerCase()) {
    case 'prime':
      return this.isPrime(value) ? 'It is Prime number' : 'It is not Prime number';
    case 'perfect':
      return this.isPerfect(value) ? 'It is Perfect number' : 'It is not Perfect number';
    case 'even':
      return this.isEven(value) ? 'It is Even' : 'It is not Even';
    case 'odd':
      return this.isOdd(value) ? 'It is Odd' : 'It is not Odd';
    default:
      return 'Invalid check type';
  }
}

private isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

private isPerfect(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i + (num / i);
    }
  }
  return sum === num;
}

private isEven(num: number): boolean {
  return num % 2 === 0;
}

private isOdd(num: number): boolean {
  return num % 2 !== 0;
}
}