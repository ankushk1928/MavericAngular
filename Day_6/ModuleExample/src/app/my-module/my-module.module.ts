import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { ProductComponent } from '../product/product.component';

const routes : Routes=[
{
  path:'home',
  component: HomeComponent
},
{
  path:'products',
  component: ProductComponent
},
{
  path:'lazy',
  loadChildren: '/lazy/lazy.module'
}
]

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    HomeComponent,
    ProductComponent,
    RouterModule
  ]
})
export class MyModuleModule { }
