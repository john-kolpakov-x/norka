import {Component, Input, OnInit} from '@angular/core';
import {Formula} from '../../../../model/Formula';
import {ElemPlus} from '../../../../model/ElemPlus';
import {ElemDiv} from '../../../../model/ElemDiv';

@Component({
  selector: 'app-elem-div',
  templateUrl: './elem-div.component.html',
  styleUrls: ['./elem-div.component.scss']
})
export class ElemDivComponent implements OnInit {
  @Input()
  formula: Formula;

  @Input()
  elemId: string;

  get elem(): ElemDiv {
    return this.formula.elements[this.elemId] as ElemDiv;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
