import {NgModule} from '@angular/core';
import {NgModlComponent} from './ng-modl.component';
import {NgModlDirective} from './ng-modl.directive';
import {NgModlConfirmComponent} from './ng-modl-confirm/ng-modl-confirm.component';
import {CommonModule} from '@angular/common';
import {NgModlService} from './ng-modl.service';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        NgModlComponent,
        NgModlDirective,
        NgModlConfirmComponent,
    ],
    providers: [
        NgModlService,
    ],
    exports: []
})
export class NgModlModule {
}
