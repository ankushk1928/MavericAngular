import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AngularToturialComponent } from './angular-toturial/angular-toturial.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path :'home',
    component:HomeComponent,
  },{
    path :'about',
    component:AboutComponent
  },
  
  {
    path :'angularTutorial',
    component:AngularToturialComponent,
    children:[
      {
        path :'pipe-example',
        component:PipeExampleComponent,
      },
      {
        path :'directive-example',
        component:DirectiveExampleComponent
      }
    ]
    },
    {
      path:'product',
      component:ProductComponent
    },
    {
      path:'**',
      component: PageNotFoundComponent,
    },
   
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
