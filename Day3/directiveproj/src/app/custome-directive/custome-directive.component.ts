import { ChangeTextDirective } from './../change-text.directive';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-custome-directive',
  template: `
<h4 appCPColor [cpColor]="titleColor"> cpColor Directive Demo using Bracket []</h4>
<h4 appCPColor bind-cpColor="titleColor"> cpColor Directive Demo using bind- prefix  </h4>
<h4 appCPColor cpColor="{{titleColor}}"> cpColor Directive Demo using Interpolation</h4> 
<div appChangeText></div>
  `,
  styles: [
  ]
})
export class CustomeDirectiveComponent implements OnInit{
  titleColor="green"
title="This is custome directive"
constructor(){}

ngOnInit(): void {


}
}