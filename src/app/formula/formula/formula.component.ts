import {Component, OnInit} from '@angular/core';
import {Formula} from '../../../model/Formula';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent {

  formula: Formula = {
    id: 'asd',
    elements: {
      id1: {
        type: 'plus',
        leftId: 'id2',
        rightId: 'id3'
      },
      id2: {
        type: 'const',
        value: '271.7'
      },
      id3: {
        type: 'div',
        topId: 'id4',
        bottomId: 'id5'
      },
      id4: {
        type: 'const',
        value: '35.9'
      },
      id5: {
        type: 'const',
        value: '-4.56'
      }
    }
  };

}
