import { Component , ViewChild, NgZone } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { CoursesPage } from '../pages/courses/courses';
import { About2Page } from '../pages/about2/about2';
import { SettingsPage } from '../pages/settings/settings';
import { AddCoursePage } from '../pages/add-course/add-course';
import { LoginPage } from '../pages/login/login';
import { SignUpPage} from '../pages/sign-up/sign-up';
import { LogOutPage } from '../pages/log-out/log-out';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TodoPage } from '../pages/todo/todo';

import { AuthProvider } from '../providers/auth';
import { TaskData } from '../../providers/data';
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;
  zone: NgZone;
  pages: Array<{title: string, component: any}>;


  constructor(platform: Platform){
    this.zone = new NgZone({});
     firebase.initializeApp({
      apiKey: "AIzaSyDnveEYBBtwYLLyzFnklwVf6a-gVsDbQUo",
      authDomain: "academicplanner-b760c.firebaseapp.com",
      databaseURL: "https://academicplanner-b760c.firebaseio.com",
      storageBucket: "academicplanner-b760c.appspot.com",
      messagingSenderId: "899304504517"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run( () => {
        if (!user) {
          this.rootPage = LoginPage;
          unsubscribe();
        } else {
          this.rootPage = TabsPage;
          unsubscribe();
        }
      });
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });




      this.pages = [
        { title: 'This Week', component: TabsPage },
        { title: 'Courses',   component: CoursesPage },
        { title: 'About' ,    component: About2Page },
        { title: 'Settings',  component: SettingsPage},
        { title: 'Log Out',  component: LogOutPage}
      ];

    }


    openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    }




}
