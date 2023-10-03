import { Component } from '@angular/core';
const users=[
  {
    id:1,
    first_name:'Ankush',
    last_name:'Kadam'
   
  },
  {
    id:2,
    first_name:'Pushkar',
    last_name:'Madake'

  },
  {
    id:3,
    first_name:'Shantanu',
    last_name:'wagh'
  }
]


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <app-habit-list></app-habit-list>
  
  `,
  // styleUrls: ['./app.component.css'] 
  styles:['h1{ color:red; }']
})
export class AppComponent {
  title = 'my-app';
  firstName="Ankush";
  Users=users;
  userName=" ";
  imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFh8XRLI9SS0uabfpDHNe6To4RHrctjg-Pkw&usqp=CAU"

  callMe(){
    alert("called")
  }
}