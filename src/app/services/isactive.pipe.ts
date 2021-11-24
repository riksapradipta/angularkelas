import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isactive'
})
export class IsactivePipe implements PipeTransform {

  transform(value?: unknown): string {
    return value ? 'Ada' : 'Habis'
  }

}
