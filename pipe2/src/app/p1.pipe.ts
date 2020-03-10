import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p1'
})
export class P1Pipe implements PipeTransform {

  transform(x) {
  //  alert(x)
  var str=""
  for(var i=0;i<x.length;i++)
{
  if(i%2==0)
  {
    str+=(x[i].toUpperCase())
  }
  else
  str+=(x[i].toLowerCase())
  
}
    return str;
  }

}
