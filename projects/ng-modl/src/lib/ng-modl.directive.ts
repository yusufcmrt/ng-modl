import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngModlDirective]',
})
export class NgModlDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
