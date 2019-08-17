import {AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, EventEmitter, ViewChild} from '@angular/core';
import {NgModlContentData} from './ng-modl.type';
import {NgModlDirective} from './ng-modl.directive';
import {OnNgModlInit} from './ng-modl.inheritance';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ng-modl',
  template: `
    <div class="ng-modl-fade"></div>

    <div class="ng-modl"
         [style.minHeight]="data.minHeight"
         [style.maxHeight]="data.maxHeight"
         [style.maxWidth]="data.maxWidth"
         [style.minWidth]="data.minWidth">

      <div class='ng-modl-header'>
        <span>{{data.title}}</span>
        <button class="ng-modl-modal-close-button" (click)="dismiss()" [autofocus]="false">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.9 21.9" xmlns:xlink="http://www.w3.org/1999/xlink"
               enable-background="new 0 0 21.9 21.9">
            <path
              d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z"/>
          </svg>
        </button>
      </div>

      <div class='ng-modl-content'>
        <ng-template ngModlDirective></ng-template>
      </div>

    </div>
  `,
  animations: [
    trigger('loadAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate(250, style({opacity: 1})),
      ]),
    ])
  ],
  host: {
    '[@loadAnimation]': '"loaded"',
  }
})
export class NgModlComponent implements AfterViewInit {


  data: NgModlContentData;
  component: any;
  dismiss: (param?: any) => void;
  @ViewChild(NgModlDirective, {static: true}) template: NgModlDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cr: ChangeDetectorRef) {
  }

  modalInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    const componentRef = this.template.viewContainerRef.createComponent(componentFactory);
    const component = componentRef.instance as NgModlComponent;
    if (this.data.inputs) {
      componentFactory.inputs.forEach(d => {
        if (this.data.inputs[d.templateName] !== undefined) {
          component[d.propName] = this.data.inputs[d.templateName];
        }
      });
    }
    if (this.data.outputs) {
      componentFactory.outputs.forEach(d => {
        if (this.data.outputs[d.templateName] !== undefined) {
          (component[d.propName] as EventEmitter<any>).subscribe(v => this.data.outputs[d.templateName](v));
        }
      });
    }
    (component as any).__dismissFn = this.dismiss;
    if ('ngModlInit' in component) {
      (component as OnNgModlInit).ngModlInit();
    }
  }

  ngAfterViewInit(): void {
    this.cr.detectChanges();
  }

}
