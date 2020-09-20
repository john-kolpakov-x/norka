import {FElement} from './FElement';
import {FElementRegistration} from './FElementRegistration';

export class FElemRegistrar {
  private numGenerator = 1;
  private elemIdNumMap: { [elemId: string]: [number] } = {};
  private numElemMap: { [num: number]: FElement } = {};

  public register(elem: FElement): FElementRegistration {
    const num = this.numGenerator++;

    {
      this.numElemMap[num] = elem;
      const id = elem.id();
      const arr = this.elemIdNumMap[id];
      if (arr) {
        arr.push(num);
      } else {
        this.elemIdNumMap[id] = [num];
      }
    }

    {
      const self = this;
      return {
        unregister(): void {
          const e = self.numElemMap[num];
          delete self.numElemMap[num];
          if (e) {
            const id = e.id();
            const arr = self.elemIdNumMap[id];
            if (arr) {
              let index = 0;
              while (index < arr.length) {
                if (arr[index] === num) {
                  arr.splice(index, 1);
                } else {
                  index++;
                }
              }
            }
          }
        }
      } as FElementRegistration;
    }
  }

  public elemById(elemId: string): FElement {

    const arr = this.elemIdNumMap[elemId];
    if (!arr) {
      return undefined;
    }

    for (const num of arr) {
      const fElement = this.numElemMap[num];
      if (fElement) {
        return fElement;
      }
    }
  }
}
