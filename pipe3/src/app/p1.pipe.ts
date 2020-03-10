import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p1'
})
export class P1Pipe implements PipeTransform {

  transform(x,arg1,arg2) {
    return x.replace(RegExp(arg1,"g"),arg2);
  }

}
