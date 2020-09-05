import {Component} from '@angular/core';
import {Formula} from '../model/Formula';
import {ElemType} from '../model/ElemType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formula: Formula = {
    id: 'asd',
    elements: {
      id1: {
        type: ElemType.PLUS,
        leftId: 'id2',
        rightId: 'id3'
      },
      id2: {
        type: 'const',
        value: '2'
      },
      id3: {
        type: 'const',
        value: '3'
      },
    }
  };

}
