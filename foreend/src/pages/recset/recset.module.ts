import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecsetPage } from './recset';

@NgModule({
  declarations: [
    RecsetPage,
  ],
  imports: [
    IonicPageModule.forChild(RecsetPage),
  ],
})
export class RecsetPageModule {}
