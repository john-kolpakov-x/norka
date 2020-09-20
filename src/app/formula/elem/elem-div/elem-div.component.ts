import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Formula} from '../../../../model/Formula';
import {ElemDiv} from '../../../../model/ElemDiv';
import {FElement} from '../../FElement';
import {FormulaStateService} from '../../formula-state.service';
import {FParent} from '../../FParent';
import {FocusMoveDirection} from '../../FocusMoveDirection';
import {FElementRegistration} from '../../FElementRegistration';
import {StdPos} from '../../StdPos';

@Component({
  selector: 'app-elem-div',
  templateUrl: './elem-div.component.html',
  styleUrls: ['./elem-div.component.scss']
})
export class ElemDivComponent implements OnInit, FElement, FParent, OnDestroy {
  @Input()
  formula: Formula;

  @Input()
  elemId: string;

  @Input()
  parent: FParent;

  StdPos = StdPos;
  cursorPos: StdPos = StdPos.LEFT;

  fElementRegistration: FElementRegistration;

  id(): string {
    return this.elemId;
  }

  get elem(): ElemDiv {
    return this.formula.elements[this.elemId] as ElemDiv;
  }

  constructor(public state: FormulaStateService) {}

  ngOnInit(): void {
    this.fElementRegistration = this.state.register(this);
  }

  ngOnDestroy(): void {
    if (this.fElementRegistration) {
      this.fElementRegistration.unregister();
    }
  }

  doKeyDown(event: KeyboardEvent): boolean {

    if (this.cursorPos === StdPos.LEFT) {
      if (event.key === 'ArrowUp') {
        return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.UP);
      }
      if (event.key === 'ArrowDown') {
        return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.DOWN);
      }
      if (event.key === 'ArrowLeft') {
        return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.LEFT);
      }
      if (event.key === 'ArrowRight') {
        return this.state.setFocus(this.elem.topId, FocusMoveDirection.RIGHT);
      }
      return false;
    }

    if (this.cursorPos === StdPos.MIDDLE) {
      if (event.key === 'ArrowUp') {
        return this.state.setFocus(this.elem.topId, FocusMoveDirection.UP);
      }
      if (event.key === 'ArrowDown') {
        return this.state.setFocus(this.elem.bottomId, FocusMoveDirection.DOWN);
      }
      if (event.key === 'ArrowLeft') {
        this.cursorPos = StdPos.LEFT;
        return true;
      }
      if (event.key === 'ArrowRight') {
        this.cursorPos = StdPos.RIGHT;
        return true;
      }
      return false;
    }

    if (this.cursorPos === StdPos.RIGHT) {
      if (event.key === 'ArrowUp') {
        return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.UP);
      }
      if (event.key === 'ArrowDown') {
        return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.DOWN);
      }
      if (event.key === 'ArrowRight') {
        return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.RIGHT);
      }
      if (event.key === 'ArrowLeft') {
        return this.state.setFocus(this.elem.bottomId, FocusMoveDirection.LEFT);
      }
      return false;
    }

    console.log('rzz88WyrSY :: ElemDivComponent Come event = ', event);
    return false;
  }

  takeFocusFromChild(childElemId: string, focusMoveDirection: FocusMoveDirection): boolean {

    if (childElemId === this.elem.topId) {

      if (focusMoveDirection === FocusMoveDirection.UP || focusMoveDirection === FocusMoveDirection.LEFT) {
        this.cursorPos = StdPos.LEFT;
        this.state.focusedId = this.elemId;
        return true;
      }

      if (focusMoveDirection === FocusMoveDirection.DOWN) {
        this.cursorPos = StdPos.MIDDLE;
        this.state.focusedId = this.elemId;
        return true;
      }

      if (focusMoveDirection === FocusMoveDirection.RIGHT) {
        return this.state.setFocus(this.elem.bottomId, focusMoveDirection);
      }

      return false;
    }

    if (childElemId === this.elem.bottomId) {

      if (focusMoveDirection === FocusMoveDirection.UP) {
        this.cursorPos = StdPos.MIDDLE;
        this.state.focusedId = this.elemId;
        return true;
      }
      if (focusMoveDirection === FocusMoveDirection.DOWN || focusMoveDirection === FocusMoveDirection.RIGHT) {
        this.cursorPos = StdPos.RIGHT;
        this.state.focusedId = this.elemId;
        return true;
      }
      if (focusMoveDirection === FocusMoveDirection.LEFT) {
        return this.state.setFocus(this.elem.topId, focusMoveDirection);
      }

      return false;
    }

    return false;
  }

  takeFocusFromParent(focusMoveDirection: FocusMoveDirection): boolean {
    this.state.focusedId = this.elemId;

    if (focusMoveDirection === FocusMoveDirection.LEFT) {
      this.cursorPos = StdPos.RIGHT;
      return true;
    }

    if (focusMoveDirection === FocusMoveDirection.RIGHT) {
      this.cursorPos = StdPos.LEFT;
      return true;
    }

    this.cursorPos = StdPos.MIDDLE;
    return true;
  }

}
