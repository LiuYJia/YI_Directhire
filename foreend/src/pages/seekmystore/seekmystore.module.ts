import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeekmystorePage } from './seekmystore';

@NgModule({
  declarations: [
    SeekmystorePage,
  ],
  imports: [
    IonicPageModule.forChild(SeekmystorePage),
  ],
})
export class SeekmystorePageModule {}
