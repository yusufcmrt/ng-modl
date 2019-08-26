import {Component} from '@angular/core';
import {NgModlService} from 'ng-modl';
import {InputFormComponent} from './input-form/input-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modlService: NgModlService) {
  }

  showAlert() {
    this.modlService.alert('This is Alert');
  }

  showConfirm() {
    this.modlService.confirm('This is confirm');
  }

  showCustom() {
    this.modlService.dialog(InputFormComponent, 'Custom Dialog');
  }

}
