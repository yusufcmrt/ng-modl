import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgModlModule} from '../../projects/ng-modl/src/lib/ng-modl.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgModlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
