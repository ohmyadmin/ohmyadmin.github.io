import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'to-px'
})
export class PixelsPipe implements PipeTransform {
  transform(value: number | string | undefined | null): string | 0 | undefined {
    if (value === undefined || value === null || value.toString().trim() === '') {
      return undefined;
    }
    if (isNaN(Number(value))) {
      return undefined
    }
    return `${value}px`;
  }
}
