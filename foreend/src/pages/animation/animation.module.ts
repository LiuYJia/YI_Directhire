import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimationPage } from './animation';

@NgModule({
  declarations: [
    AnimationPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimationPage),
  ],
})
export class AnimationPageModule {}
