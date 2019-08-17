import {NgModule} from '@angular/core';
import {NgModlComponent} from './ng-modl.component';
import {NgModlDirective} from './ng-modl.directive';
import {NgModlConfirmComponent} from './ng-modl-confirm/ng-modl-confirm.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    NgModlComponent,
    NgModlDirective,
    NgModlConfirmComponent,
  ],
  entryComponents: [
    NgModlComponent,
    NgModlConfirmComponent,
  ],
  exports: [NgModlComponent]
})
export class NgModlModule {
}
