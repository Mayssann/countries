import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize',
  standalone: true
})
export class PluralizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "XYZ";
  }

}
