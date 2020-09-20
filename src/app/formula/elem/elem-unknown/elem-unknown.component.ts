import {Component, Input, OnInit} from '@angular/core';
import {FParent} from '../../FParent';

@Component({
  selector: 'app-elem-unknown',
  templateUrl: './elem-unknown.component.html',
  styleUrls: ['./elem-unknown.component.scss']
})
export class ElemUnknownComponent implements OnInit {

  @Input()
  parent: FParent;

  constructor() { }

  ngOnInit(): void {}

}
