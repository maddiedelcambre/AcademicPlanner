import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { TodayPage } from '../today/today';
import { TodoPage } from '../todo/todo';
//providers
//import { AngularFire, FirebaseListObservable } from 'angularfire2';
//import { AuthProvider } from '../../providers/auth';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = TodayPage;
  tab3Root: any = TodoPage;

  constructor() {

  }
}
