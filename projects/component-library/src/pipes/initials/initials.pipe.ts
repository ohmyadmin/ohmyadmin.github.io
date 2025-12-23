import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform(value: string): unknown {
    const name_parts = value.trim().split(/\s+/);

    if (name_parts.length === 0 || name_parts[0] === "") {
      return 'UU';
    }

    const first_name_initial = name_parts[0].charAt(0);

    if (name_parts.length === 1) {
      return first_name_initial.toUpperCase();
    }

    const last_name_initial = name_parts[name_parts.length - 1].charAt(0);

    return (first_name_initial + last_name_initial).toUpperCase();
  }

}
