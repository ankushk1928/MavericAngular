import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { FormsModule } from '@angular/forms';
import { ChangeTextDirective } from './change-text.directive';
import { CustomeDirectiveComponent } from './custome-directive/custome-directive.component';
import { MydateDirective } from './mydate.directive';
import { CPColorDirective } from './cpcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectiveComponent,
    ChangeTextDirective,
    CustomeDirectiveComponent,
    MydateDirective,
    CPColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
