import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecmystorePage } from './recmystore';

@NgModule({
  declarations: [
    RecmystorePage,
  ],
  imports: [
    IonicPageModule.forChild(RecmystorePage),
  ],
})
export class RecmystorePageModule {}
