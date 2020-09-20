import {Component, Input, OnInit} from '@angular/core';
import {Formula} from '../../../../model/Formula';
import {ElemConst} from '../../../../model/ElemConst';
import {ElemPlus} from '../../../../model/ElemPlus';

@Component({
  selector: 'app-elem-const',
  templateUrl: './elem-const.component.html',
  styleUrls: ['./elem-const.component.scss']
})
export class ElemConstComponent implements OnInit {
  @Input()
  formula: Formula;

  @Input()
  elemId: string;

  get elem(): ElemConst {
    return this.formula.elements[this.elemId] as ElemConst;
  }

  get elemParts(): string[] {
    const elemValue = this.elem.value;
    if (!elemValue) {
      return [];
    }
    const count = elemValue.length;
    const ret: string[] = [];
    for (let i = 0; i < count; i++) {
      ret.push(elemValue[i]);
    }
    return ret;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
