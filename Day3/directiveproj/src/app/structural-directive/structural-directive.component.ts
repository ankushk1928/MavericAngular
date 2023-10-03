import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  template: `
    <div id="d1">
    
<h3>ng-template with ngIf</h3>
<button type="button" (click)="onToggle1()">Toggle</button>

<ng-template [ngIf]= "toggleFlag1" >
   <div>Hello World!</div>
</ng-template>

<h3>ng-template with ngIf-else</h3>

<button type="button" (click)="onToggle2()">Toggle</button>

<div *ngIf="toggleFlag2; else msgElseBlock" >
   <div>Hello World!</div>
</div>

<ng-template #msgElseBlock>
   <div>Else Block: Hello World! </div>
</ng-template>

<h3>ng-template with ngIf-then-else</h3>

<button type="button" (click)="onToggle3()">Toggle</button>

<div *ngIf="toggleFlag3; then thenBlock else elseBlock">

</div>
<ng-template #thenBlock>
    <div>Then Block: Hello World!</div>
</ng-template>
<ng-template #elseBlock>
    <div>Else Block: Hello World!</div>
</ng-template>

    </div>
    Enter new country side<input type="text"[(ngModel)]="newSide"/>
    <button (click)="addCountry()">Add New Country</button>
      <div *ngFor="let sides of countrySides;">
        <input type="radio" name="direction" (click)="myDir=sides"/>{{sides}}
      </div>
   
      <input type="radio" name="direction" (click)="myDir='east'">East
<input type="radio" name="direction" (click)="myDir='west'">West
<input type="radio" name="direction" (click)="myDir='north'">North
<input type="radio" name="direction" (click)="myDir='south'">South

<div [ngSwitch]='myDir'>
    <h3 *ngSwitchCase="'east'">East is selected</h3>
    <h3 *ngSwitchCase="'west'">West is selected</h3>
    <h3 *ngSwitchCase="'north'">North is selected</h3>
    <h3 *ngSwitchCase="'sounth'">Sounth is selected</h3>
    <h3 *ngSwitchDefault="">You have not selected any Number</h3>
</div>
  `,

  styles: [
  ]
})
export class StructuralDirectiveComponent implements OnInit {
myDir=""
dropDownValue ="";
newSide=""
  countrySides=["east", "north", "south","west"]
  SetDropDownValue(drpValue :any)
  {
    this.dropDownValue = drpValue.target.value  ;
  }
  addCountry(){
    this.countrySides.push(this.newSide)
  }
  toggleFlag2=true
  toggleFlag3=true
  toggleFlag1=true




  constructor() { }

  ngOnInit(): void {


  }

  onToggle2(){
    alert("onToggle2 is called")
    this.toggleFlag2!=this.toggleFlag2
  }

  onToggle1(){
    alert("onToggle1 is called")
    this.toggleFlag1!=this.toggleFlag1

  }

  onToggle3(){
   alert("onToggle3 is called")
   this.toggleFlag3!=this.toggleFlag3

  }


}
