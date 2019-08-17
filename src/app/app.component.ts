import {Component} from '@angular/core';
import {NgModlService} from '../../projects/ng-modl/src/lib/ng-modl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modlService: NgModlService) {
  }

  openModl() {
    this.modlService.alert('This is Alert');
  }

}
