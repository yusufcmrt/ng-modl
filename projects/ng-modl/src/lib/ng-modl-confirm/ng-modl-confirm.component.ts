import {Component, Input} from '@angular/core';
import {NgModlComponent} from '../ng-modl.inheritance';

@Component({
  selector: 'ng-modl-dialog-confirm',
  template: `
    <p>{{message}}</p>
    <div>
      <button class="ng-modl-close-btn" (click)="dismiss()" *ngIf="type !== 'alert'">Cancel</button>
      <button class="ng-modl-success-btn" (click)="dismiss(true)">Okey</button>
    </div>
  `,
})
export class NgModlConfirmComponent extends NgModlComponent {

  @Input() message = '';
  @Input() type: 'alert' | 'confirm' = 'confirm';

  constructor() {
    super();
  }

}
