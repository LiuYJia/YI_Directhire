import { Component } from '@angular/core';
import { SeekhomePage } from '../seekhome/seekhome';
import { SeekmessagePage } from '../seekmessage/seekmessage';
import { SeekmiddlePage } from '../seekmiddle/seekmiddle';
import { SeeknearPage } from '../seeknear/seeknear';
import { SeekmyPage } from '../seekmy/seekmy';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SeekhomePage;
  tab2Root = SeekmessagePage;
  tab3Root = SeekmiddlePage;
  tab4Root = SeeknearPage;
  tab5Root = SeekmyPage;

  constructor() {

  }
}
