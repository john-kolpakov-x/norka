import {Component, Input, OnInit} from '@angular/core';
import {ElemType} from '../../model/ElemType';
import {Formula} from '../../model/Formula';
import {Elem} from '../../model/Elem';

@Component({
  selector: 'app-elem',
  templateUrl: './elem.component.html',
  styleUrls: ['./elem.component.scss']
})
export class ElemComponent implements OnInit {

  E_UNKNOWN = ElemType.UNKNOWN;
  E_PLUS = ElemType.PLUS;
  E_CONST = ElemType.CONST;

  @Input()
  formula: Formula;

  @Input()
  elemId: string;

  get type(): ElemType {

    const elem: Elem = this.formula.elements[this.elemId];
    if (!elem || !elem.type) {
      return ElemType.UNKNOWN;
    }

    return elem.type;
  }

  get elem(): Elem {
    return this.formula.elements[this.elemId];
  }

  constructor() { }

  ngOnInit(): void {}

}
