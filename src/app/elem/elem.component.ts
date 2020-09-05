import {Component, Input, OnInit} from '@angular/core';
import {Formula} from '../../model/Formula';
import {Elem} from '../../model/Elem';

@Component({
  selector: 'app-elem',
  templateUrl: './elem.component.html',
  styleUrls: ['./elem.component.scss']
})
export class ElemComponent implements OnInit {

  @Input()
  formula: Formula;

  @Input()
  elemId: string;

  get type(): string {

    const elem: Elem = this.formula.elements[this.elemId];
    if (!elem || !elem.type) {
      return 'unknown';
    }

    return elem.type;
  }

  get elem(): Elem {
    return this.formula.elements[this.elemId];
  }

  constructor() { }

  ngOnInit(): void {}

}
