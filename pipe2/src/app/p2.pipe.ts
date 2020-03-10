import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p2'
})
export class P2Pipe implements PipeTransform {
  transform(value): any {
    var str=""
    for(var i=0;i<value.length;i++)
    {
      if(i==0 || i==value.length-1)
      str+=value[i].toUpperCase()
      else
      str+=value[i]
    }
    return str;
  }

}
