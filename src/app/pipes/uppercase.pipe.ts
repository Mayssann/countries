import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: true
})

export class UppercaseCountryPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.toUpperCase();
  }
}