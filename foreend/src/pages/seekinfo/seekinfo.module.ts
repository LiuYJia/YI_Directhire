import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeekinfoPage } from './seekinfo';

@NgModule({
  declarations: [
    SeekinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SeekinfoPage),
  ],
})
export class SeekinfoPageModule {}
