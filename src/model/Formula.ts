import {Elem} from './Elem';

export interface Formula {
  id: string;
  elements: { [key: string]: Elem };
}
