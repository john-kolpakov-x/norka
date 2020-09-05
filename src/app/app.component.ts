import {Component} from '@angular/core';
import {Formula} from '../model/Formula';

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
        type: 'plus',
        leftId: 'id2',
        rightId: 'id3'
      },
      id2: {
        type: 'const',
        value: '2'
      },
      id3: {
        type: 'plus',
        leftId: 'id4',
        rightId: 'id5'
      },
      id4: {
        type: 'const',
        value: '3'
      },
      id5: {
        type: 'const',
        value: '4'
      }
    }
  };

}
