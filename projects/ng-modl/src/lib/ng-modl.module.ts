import {NgModule} from '@angular/core';
import {NgModlComponent} from './ng-modl.component';
import {NgModlDirective} from './ng-modl.directive';
import {NgModlConfirmComponent} from './ng-modl-confirm/ng-modl-confirm.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModlService} from './ng-modl.service';


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
  providers: [
    NgModlService,
  ],
  exports: [
  ]
})
export class NgModlModule {
}
