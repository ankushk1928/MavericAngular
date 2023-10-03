import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCompComponent } from '../lazy-comp/lazy-comp.component';

const routes:Routes=[
  {
    path:'',  
    
  }
]

@NgModule({
  declarations: [
    LazyCompComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LazyModule { }
