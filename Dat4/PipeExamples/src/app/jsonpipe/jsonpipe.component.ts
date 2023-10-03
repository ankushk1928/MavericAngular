import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonpipe',
  template: `
    
    <p>Without JSON pipe:</p>
<pre>{{obj}}</pre>
<p>With JSON pipe:</p>
<pre>{{obj | json}}</pre>

    
  `,
  styles: [
  ]
})
export class JSONPipeComponent implements OnInit {
  obj: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  constructor() { }

  ngOnInit(): void {
  }

}