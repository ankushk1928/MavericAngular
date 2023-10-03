import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CildToParentComponent } from './cild-to-parent/cild-to-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CildToParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
