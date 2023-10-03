import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydate]'
})
export class MydateDirective {

  constructor(element:ElementRef,renderer:Renderer2) {
    var today=new Date().toDateString();
    renderer.setProperty(element.nativeElement,'innerHTML', today);
   }

}
