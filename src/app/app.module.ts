import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElemComponent } from './elem/elem.component';
import { ElemPlusComponent } from './elem/elem-plus/elem-plus.component';
import { ElemConstComponent } from './elem/elem-const/elem-const.component';
import { ElemUnknownComponent } from './elem/elem-unknown/elem-unknown.component';
import { ElemDivComponent } from './elem/elem-div/elem-div.component';

@NgModule({
  declarations: [
    AppComponent,
    ElemComponent,
    ElemPlusComponent,
    ElemConstComponent,
    ElemUnknownComponent,
    ElemDivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
