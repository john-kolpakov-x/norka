import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Formula} from '../../../../model/Formula';
import {ElemConst} from '../../../../model/ElemConst';
import {FormulaStateService} from '../../formula-state.service';
import {FElement} from '../../FElement';
import {FElementRegistration} from '../../FElementRegistration';
import {FParent} from '../../FParent';
import {FocusMoveDirection} from '../../FocusMoveDirection';

@Component({
  selector: 'app-elem-const',
  templateUrl: './elem-const.component.html',
  styleUrls: ['./elem-const.component.scss']
})
export class ElemConstComponent implements OnInit, FElement, OnDestroy {
  @Input()
  formula: Formula;

  @Input()
  elemId: string;

  @Input()
  parent: FParent;

  cursorPos = 0;
  fElementRegistration: FElementRegistration;

  get elem(): ElemConst {
    return this.formula.elements[this.elemId] as ElemConst;
  }

  id(): string {
    return this.elemId;
  }

  get elemParts(): string[] {
    const elemValue = this.elem.value;
    if (!elemValue) {
      return [];
    }
    const count = elemValue.length;
    const ret: string[] = [];
    for (let i = 0; i < count; i++) {
      ret.push(elemValue[i]);
    }
    return ret;
  }

  get length(): number {
    return this.elem.value ? this.elem.value.length : 0;
  }

  constructor(private state: FormulaStateService) {}

  ngOnInit(): void {
    this.fElementRegistration = this.state.register(this);
  }

  ngOnDestroy(): void {
    if (this.fElementRegistration) {
      this.fElementRegistration.unregister();
      this.fElementRegistration = undefined;
    }
  }

  letterClass(i: number): string {
    if (this.elemId !== this.state.focusedId) {
      return undefined;
    }
    return i === this.cursorPos
      ? 'const-cursor-left'
      : ((i === this.elemParts.length - 1 && this.cursorPos >= this.elemParts.length) ? 'const-cursor-right' : undefined);
  }

  doKeyDown(event: KeyboardEvent): boolean {

    if (event.key === 'ArrowUp') {
      return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.UP);
    }
    if (event.key === 'ArrowDown') {
      return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.DOWN);
    }

    if (event.key === 'ArrowRight') {
      if (this.cursorPos >= this.length) {
        return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.RIGHT);
      }
      this.cursorPos++;
      return true;
    }
    if (event.key === 'ArrowLeft') {
      if (this.cursorPos <= 0) {
        return this.parent.takeFocusFromChild(this.elemId, FocusMoveDirection.LEFT);
      }
      this.cursorPos--;
      return true;
    }

    return false;
  }

  takeFocusFromParent(focusMoveDirection: FocusMoveDirection): boolean {
    this.state.focusedId = this.elemId;

    if (focusMoveDirection === FocusMoveDirection.RIGHT) {
      this.cursorPos = 0;
      return true;
    }

    if (focusMoveDirection === FocusMoveDirection.LEFT) {
      this.cursorPos = this.length;
      return true;
    }

    // else restore prev cursorPos, saved in field `this.cursorPos`

    return true;
  }

  onMouseDown(event: MouseEvent, pos: number): void {
    this.state.focusedId = this.elemId;
    this.cursorPos = pos;

    // tslint:disable-next-line
    const W = event.target['offsetWidth'];
    // tslint:disable-next-line
    const L = event.clientX - event.target['offsetLeft'];

    if (L >= W / 2) {
      this.cursorPos++;
    }

  }
}
