import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElemComponent} from './elem/elem.component';
import {ElemPlusComponent} from './elem/elem-plus/elem-plus.component';
import {ElemConstComponent} from './elem/elem-const/elem-const.component';
import {ElemUnknownComponent} from './elem/elem-unknown/elem-unknown.component';
import {ElemDivComponent} from './elem/elem-div/elem-div.component';
import {FormulaStateService} from './formula-state.service';

@NgModule({
  declarations: [
    ElemComponent,
    ElemPlusComponent,
    ElemConstComponent,
    ElemUnknownComponent,
    ElemDivComponent,
  ],
  exports: [
    ElemComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    FormulaStateService,
  ]
})
export class FormulaModule {}
