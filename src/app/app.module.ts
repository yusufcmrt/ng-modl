import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgModlModule} from 'ng-modl';
import {InputFormComponent} from './input-form/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent
  ],
  entryComponents: [
    InputFormComponent,
  ],
  imports: [
    BrowserModule,
    NgModlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
