import {FocusMoveDirection} from './FocusMoveDirection';

export interface FElement {

  id(): string;

  doKeyDown(event: KeyboardEvent): boolean;

  takeFocusFromParent(focusMoveDirection: FocusMoveDirection): boolean;

}
