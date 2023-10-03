import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipes',
  template: `

    <h1>Root Component App</h1>
    <div>
        <h4>{{title}}</h4>
        <div>
            <p ngNonBindable>{{ dateVal | date: 'shortTime' }}</p> (1)
            <p>{{ dateVal | date: 'shortTime' }}</p>

            <p ngNonBindable>{{ dateVal | date:'fullDate' }}</p>
            <p>{{ dateVal | date: 'fullDate' }}</p>

            <p ngNonBindable>{{ dateVal | date: 'd/M/y' }}</p>
            <p>{{ dateVal | date: 'd/M/y' }}</p>
        </div>
    </div>

  `,
  styles: [
  ]
})
export class DatePipesComponent implements OnInit {
  ngOnInit(): void {
      
  }
  dateVal=new Date();
  title="Hi dosto"
}
