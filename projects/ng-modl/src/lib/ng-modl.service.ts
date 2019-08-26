import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, Type} from '@angular/core';
import {NgModlOption} from './ng-modl.type';
import {NgModlComponent} from './ng-modl.component';
import {NgModlConfirmComponent} from './ng-modl-confirm/ng-modl-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class NgModlService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef,
              private injector: Injector) {
  }

  confirm(message: string, title: string = 'Dikkat'): Promise<boolean> {
    return this.dialog(NgModlConfirmComponent, title, {
      minWidth: '250px',
      maxWidth: '400px',
      inputs: {message, type: 'confirm'},
    });
  }

  alert(message: string, title: string = 'Uyarı'): Promise<boolean> {
    return this.dialog(NgModlConfirmComponent, title, {
      minWidth: '200px',
      maxWidth: '400px',
      inputs: {message, type: 'alert'},
    });
  }

  dialog<T = any, R = any>(componentType: Type<T>, title: string, conf: NgModlOption = {}): Promise<R> {
    return new Promise<R>(resolve => {

      const windowComponentRef = this.componentFactoryResolver.resolveComponentFactory(NgModlComponent).create(this.injector);

      this.appRef.attachView(windowComponentRef.hostView);

      const component = windowComponentRef.instance as NgModlComponent;

      component.component = componentType;
      component.dismiss = (data: any) => {
        this.appRef.detachView(windowComponentRef.hostView);
        windowComponentRef.destroy();
        resolve(data);
      };
      component.data = {...conf, component, title};

      const domElem = (windowComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      component.modalInit();
    });
  }
}
