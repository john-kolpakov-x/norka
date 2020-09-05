import {Component, Input, OnInit} from '@angular/core';
import {Formula} from '../../../model/Formula';
import {ElemPlus} from '../../../model/ElemPlus';

@Component({
  selector: 'app-elem-plus',
  templateUrl: './elem-plus.component.html',
  styleUrls: ['./elem-plus.component.scss']
})
export class ElemPlusComponent implements OnInit {
  @Input()
  formula: Formula;

  @Input()
  elemId: string;

  get elem(): ElemPlus {
    return this.formula.elements[this.elemId] as ElemPlus;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
