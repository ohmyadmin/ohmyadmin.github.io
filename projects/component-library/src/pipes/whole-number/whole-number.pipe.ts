import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whole-number'
})
export class WholeNumberPipe implements PipeTransform {
  transform(value: string|number|undefined): number {
    if(value === undefined){
      return 0
    }

    const parsed_integer = parseInt(value.toString(), 10);
    if (typeof value === 'string' && isNaN(parsed_integer)) {
      return 0;
    }

    return Math.max(...[0, parsed_integer])
  }

}
