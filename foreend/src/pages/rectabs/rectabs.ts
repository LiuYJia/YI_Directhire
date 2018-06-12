import { Component } from '@angular/core';
import { RechomePage } from '../rechome/rechome';
import { RecmessagePage } from '../recmessage/recmessage';
import { RecmiddlePage } from '../recmiddle/recmiddle';
import { RecnearPage } from '../recnear/recnear';
import { RecmyPage } from '../recmy/recmy';


@Component({
  templateUrl: 'rectabs.html',
})
export class RectabsPage {

  tab1Root = RechomePage;
  tab2Root = RecmessagePage;
  tab3Root = RecmiddlePage;
  tab4Root = RecnearPage;
  tab5Root = RecmyPage;

  constructor() {

  }

}


