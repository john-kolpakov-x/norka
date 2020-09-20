import {Injectable} from '@angular/core';
import {FElement} from './FElement';
import {FElementRegistration} from './FElementRegistration';
import {FElemRegistrar} from './FElemRegistrar';
import {FocusMoveDirection} from './FocusMoveDirection';

@Injectable()
export class FormulaStateService {
  constructor() {}

  focusedId: string = 'id5';

  private fElemRegistrar = new FElemRegistrar();

  public register(elem: FElement): FElementRegistration {
    return this.fElemRegistrar.register(elem);
  }

  public elemById(elemId: string): FElement {
    return this.fElemRegistrar.elemById(elemId);
  }

  onKeyDown(event: KeyboardEvent): boolean {

    const fElement: FElement = this.elemById(this.focusedId);
    if (fElement) {
      if (fElement.doKeyDown(event)) {
        return true;
      }
    }

    return false;
  }

  setFocus(elemId: string, focusMoveDirection: FocusMoveDirection): boolean {
    const fElement = this.elemById(elemId);
    if (!fElement) {
      return false;
    }
    return fElement.takeFocusFromParent(focusMoveDirection);
  }
}
