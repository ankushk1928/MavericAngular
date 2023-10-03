import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   value=0;
//   title = 'ComponenetLifeCycleExample';

//    increment() {
//     this.value++;
//   }
//   decrement(){
//     this.value--;
//   }
export class AppComponent {
  title = 'Component Interaction';
  Counter = 5;
 
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }
}
