export interface NgModlOptionInputType {
  [templateName: string]: any;
}

export interface NgModlOptionOutputType {
  [templateName: string]: ($event) => void;
}

export interface NgModlOption {
  width?: string;
  height?: string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  inputs?: NgModlOptionInputType;
  outputs?: NgModlOptionOutputType;
}

export interface NgModlContentData extends NgModlOption {
  component: any;
  title: string;
}
