import {FocusMoveDirection} from './FocusMoveDirection';

export interface FParent {

  /**
   * Вызывается из дочернего элемента чтобы текущий элемент получил фокус
   * @param childElemId ИД дочернего элемента
   * @param focusMoveDirection направление движения фокуса
   * @return true - родитель принял фокус. false - фокус должен остаться на месте
   */
  takeFocusFromChild(childElemId: string, focusMoveDirection: FocusMoveDirection): boolean;

}
