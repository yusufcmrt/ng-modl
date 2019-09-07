import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgModlModule} from 'ng-modl';
import {InputFormComponent} from './input-form/input-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    NgModlModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    InputFormComponent
  ],
  entryComponents: [
    InputFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
