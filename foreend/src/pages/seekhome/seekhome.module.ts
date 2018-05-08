import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeekhomePage } from './seekhome';

@NgModule({
  declarations: [
    SeekhomePage,
  ],
  imports: [
    IonicPageModule.forChild(SeekhomePage),
  ],
})
export class SeekhomePageModule {}
