import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice-pipe',
  template: `
    <div>
    <p>{{str}}[0:4]: '{{str | slice:0:4}}' - output is expected to be 'abcd'</p>
    <p>{{str}}[4:0]: '{{str | slice:4:0}}' - output is expected to be ''</p>
    <p>{{str}}[-4]: '{{str | slice:-4}}' - output is expected to be 'ghij'</p>
    <p>{{str}}[-4:-2]: '{{str | slice:-4:-2}}' - output is expected to be 'gh'</p>
    <p>{{str}}[-100]: '{{str | slice:-100}}' - output is expected to be 'abcdefghij'</p>
    <p>{{str}}[100]: '{{str | slice:100}}' - output is expected to be ''</p>

    <b>{{months | slice:2:6}}</b>

    </div>
  `,
  styles: [
  ]
})
export class SlicePipeComponent implements OnInit {
  str: string = 'abcdefghij';
  months=['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  constructor() { }

  ngOnInit(): void {
  }

}
