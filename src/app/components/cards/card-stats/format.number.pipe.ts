import {Pipe, PipeTransform} from '@angular/core';

export const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

@Pipe({name: 'asFormattedNumber'})
export class FormatNumberPipe implements PipeTransform {
  constructor() {
  }

  transform(num: number): any {
    if(num < 1){
      return num.toPrecision(3);
    }
    // what tier? (determines SI symbol)
    const tier = Math.log10(Math.abs(num)) / 3 | 0;

    // if zero, we don't need a suffix
    if (tier === 0) return num;

    // get suffix and determine scale
    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);

    // scale the number
    const scaled = num / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
  }
}
