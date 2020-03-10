import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p2'
})
export class P2Pipe implements PipeTransform {

  transform(x) {
    var str=""
    for(var i=0;i<x.length;i++){
      if(i%2==0)
      str+=x[i].toUpperCase()
      else
      str+=x[i]
    }
    return str;
  }

}
