import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatePipesComponent } from './date-pipes/date-pipes.component';
import { NumberPipeComponent } from './number-pipe/number-pipe.component';
import { SlicePipeComponent } from './slice-pipe/slice-pipe.component';
import { JSONPipeComponent } from './jsonpipe/jsonpipe.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { HTTPExampleComponent } from './httpexample/httpexample.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DatePipesComponent,
    NumberPipeComponent,
    SlicePipeComponent,
    JSONPipeComponent,
    ReverseStrPipe,
    HTTPExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
