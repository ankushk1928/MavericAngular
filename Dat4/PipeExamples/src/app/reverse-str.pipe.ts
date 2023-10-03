

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log("VALUE :- "+value)
    console.log("ARGS"+args)
    let newStr: string = "";
    for (var i = 0; i <value.length; i++) 
    {
      if (i==0 || i==(value.length-1))
    {
      newStr += value.charAt(i).toUpperCase();
    }
  else{
    newStr += value.charAt(i);
  }
  }
    return newStr;
  }
}
