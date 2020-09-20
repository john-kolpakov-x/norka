import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Formula} from '../../../model/Formula';
import {FormulaStateService} from '../formula-state.service';
import {FParent} from '../FParent';
import {FocusMoveDirection} from '../FocusMoveDirection';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent implements FParent {

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

  constructor(private state: FormulaStateService) {
    // tslint:disable-next-line
    window['formulaStateServiceView'] = state;
  }

  onKeyDown($event: KeyboardEvent): void {
    if (!this.state.onKeyDown($event)) {
      console.log('yEigN4wf0Y :: FormulaComponent $event = ', $event);
    }
  }

  takeFocusFromChild(childElemId: string, focusMoveDirection: FocusMoveDirection): boolean {
    console.log('gykIc51XD9 :: takeFocusFromChild : childElemId = ', childElemId, ' : ', focusMoveDirection);
    return false;
  }

}
