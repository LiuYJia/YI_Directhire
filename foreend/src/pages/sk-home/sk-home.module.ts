import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkHomePage } from './sk-home';

@NgModule({
  declarations: [
    SkHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SkHomePage),
  ],
})
export class SkHomePageModule {}
