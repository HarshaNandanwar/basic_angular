import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollerRupee'
})
export class DollerRupeePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const [x]=args;
    console.log(x);
    
    return value*(82.76);
  }

}
