export interface OnNgModlInit {
  ngModlInit(): void;
}

export abstract class NgModlComponent {
  dismiss(data?: any) {
    (this as any).__dismissFn(data);
  }
}
