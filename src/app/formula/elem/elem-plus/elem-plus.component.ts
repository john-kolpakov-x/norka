import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Formula} from '../../../../model/Formula';
import {ElemPlus} from '../../../../model/ElemPlus';
import {FParent} from '../../FParent';
import {FocusMoveDirection} from '../../FocusMoveDirection';
import {FElementRegistration} from '../../FElementRegistration';
import {FormulaStateService} from '../../formula-state.service';
import {FElement} from '../../FElement';

@Component({
  selector: 'app-elem-plus',
  templateUrl: './elem-plus.component.html',
  styleUrls: ['./elem-plus.component.scss']
})
export class ElemPlusComponent implements OnInit, FParent, FElement, OnDestroy {
  @Input()
  formula: Formula;

  @Input()
  elemId: string;

  @Input()
  parent: FParent;

  fElementRegistration: FElementRegistration;

  get elem(): ElemPlus {
    return this.formula.elements[this.elemId] as ElemPlus;
  }

  constructor(public state: FormulaStateService) { }

  ngOnInit(): void {
    this.fElementRegistration = this.state.register(this);
  }

  ngOnDestroy(): void {
    if (this.fElementRegistration) {
      this.fElementRegistration.unregister();
    }
  }

  id(): string {
    return this.elemId;
  }

  doKeyDown(event: KeyboardEvent): boolean {

    if (event.code === 'ArrowLeft') {
      return this.state.setFocus(this.elem.leftId, FocusMoveDirection.LEFT);
    }
    if (event.code === 'ArrowRight') {
      return this.state.setFocus(this.elem.rightId, FocusMoveDirection.RIGHT);
    }
    if (event.code === 'ArrowUp') {
      return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.UP);
    }
    if (event.code === 'ArrowDown') {
      return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.DOWN);
    }

    return false;
  }

  takeFocusFromChild(childElemId: string, focusMoveDirection: FocusMoveDirection): boolean {

    if (focusMoveDirection === FocusMoveDirection.DOWN || focusMoveDirection === FocusMoveDirection.UP) {
      return this.parent.takeFocusFromChild(this.elemId, focusMoveDirection);
    }

    if (childElemId === this.elem.rightId && focusMoveDirection === FocusMoveDirection.RIGHT) {
      return this.parent.takeFocusFromChild(this.elemId, focusMoveDirection);
    }

    if (childElemId === this.elem.leftId && focusMoveDirection === FocusMoveDirection.LEFT) {
      return this.parent.takeFocusFromChild(this.elemId, focusMoveDirection);
    }

    if (childElemId === this.elem.leftId && focusMoveDirection === FocusMoveDirection.RIGHT) {
      this.state.focusedId = this.elemId;
      return true;
    }

    if (childElemId === this.elem.rightId && focusMoveDirection === FocusMoveDirection.LEFT) {
      this.state.focusedId = this.elemId;
      return true;
    }

    return false;
  }


  takeFocusFromParent(focusMoveDirection: FocusMoveDirection): boolean {

    if (focusMoveDirection === FocusMoveDirection.UP) {
      this.state.focusedId = this.elemId;
      return true;
    }

    if (focusMoveDirection === FocusMoveDirection.DOWN) {
      this.state.focusedId = this.elemId;
      return true;
    }

    if (focusMoveDirection === FocusMoveDirection.LEFT) {
      return this.state.setFocus(this.elem.rightId, focusMoveDirection);
    }

    if (focusMoveDirection === FocusMoveDirection.RIGHT) {
      return this.state.setFocus(this.elem.leftId, focusMoveDirection);
    }

    return false;
  }
}
