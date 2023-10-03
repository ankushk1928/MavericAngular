import { DirectiveExampleComponent } from './../directive-example/directive-example.component';
import { PipeExampleComponent } from './../pipe-example/pipe-example.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-toturial',
  template: `
   <nav>
  <ul>
    <li>
      <a routerLink='pipe-example' routerLinkActive='active'>Pipe Example</a>&nbsp;
      <a routerLink='directive-example' routerLinkActive='active'>Directive Example</a>
    </li>
  </ul>
</nav>
<router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class AngularToturialComponent {

}
