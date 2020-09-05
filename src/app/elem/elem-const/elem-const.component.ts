import {Component, Input, OnInit} from '@angular/core';
import {Formula} from '../../../model/Formula';
import {ElemConst} from '../../../model/ElemConst';

@Component({
  selector: 'app-elem-const',
  templateUrl: './elem-const.component.html',
  styleUrls: ['./elem-const.component.scss']
})
export class ElemConstComponent implements OnInit {
  @Input()
  formula: Formula;

  @Input()
  elem: ElemConst;

  @Input()
  elemId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
