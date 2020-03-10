import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p3'
})
export class P3Pipe implements PipeTransform {

  transform(y,arg1): any {
    if(arg1=="d")
    return y/72
    else
    if(arg1=="e")
    return y/80
    
  }

}
