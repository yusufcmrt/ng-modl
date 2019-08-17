import {Component, Input} from '@angular/core';
import {NgModlComponent} from '../ng-modl.inheritance';

@Component({
  selector: 'ng-modl-dialog-confirm',
  template: `
    <p>{{message}}</p>
    <div>
      <button class="ng-modl-close-btn" (click)="dismiss()" *ngIf="type !== 'alert'">İptal</button>
      <button class="ng-modl-success-btn" (click)="dismiss(true)">Tamam</button>
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
