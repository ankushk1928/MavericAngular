import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cild-to-parent',
  templateUrl: './cild-to-parent.component.html',
  styleUrls: ['./cild-to-parent.component.css']
})
export class CildToParentComponent {
  @Input() count: number=0;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  increment() {
     this.count++;
     this.countChanged.emit(this.count);
   }
 decrement() {
     this.count--;
     this.countChanged.emit(this.count);
 }

  constructor() { }

  ngOnInit(): void {
  }
}
