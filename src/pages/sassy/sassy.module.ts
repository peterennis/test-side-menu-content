import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SassyPage } from './sassy';

@NgModule({
  declarations: [
    SassyPage,
  ],
  imports: [
    IonicPageModule.forChild(SassyPage),
  ],
})
export class SassyPageModule {}
