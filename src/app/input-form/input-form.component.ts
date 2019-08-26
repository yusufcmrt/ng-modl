import {Component, OnInit} from '@angular/core';
import {NgModlComponent} from 'ng-modl';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent extends NgModlComponent implements OnInit {

  name: string;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
