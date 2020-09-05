import {Component, Input, OnInit} from '@angular/core';
import {Formula} from '../../../model/Formula';
import {ElemConst} from '../../../model/ElemConst';
import {ElemPlus} from '../../../model/ElemPlus';

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

  constructor() { }

  ngOnInit(): void {
  }

}
