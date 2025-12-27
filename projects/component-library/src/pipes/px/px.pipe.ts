import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'to-px'
})
export class PxPipe implements PipeTransform {
  transform(value: string|undefined): string | undefined {
    if (value === undefined || value === null || value.toString().trim() === '') {
      return undefined;
    }

    if(isNaN(Number(value))){
      return undefined
    }

    return `${value}px`;
  }

}
