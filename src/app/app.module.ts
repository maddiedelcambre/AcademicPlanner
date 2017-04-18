import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import{ AngularFire, FirebaseListObservable} from 'angularfire2';
import { AngularFireModule} from 'angularfire2';
// Pages
import { TodayPage } from '../pages/today/today';
import { TodoPage } from '../pages/todo/todo';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewTaskPage } from '../pages/new-task/new-task';
import { CoursesPage } from '../pages/courses/courses';
import { About2Page } from '../pages/about2/about2';
import { SettingsPage } from '../pages/settings/settings';
import { AddCoursePage } from '../pages/add-course/add-course';
import { LoginPage } from '../pages/login/login';
import { SignUpPage} from '../pages/sign-up/sign-up';
import { LogOutPage } from '../pages/log-out/log-out';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';

// Providers
import { TaskData} from '../providers/data';
import { AuthProvider } from '../providers/auth';
import { GetProviders } from './app.providers';

// export const firebaseConfig = {
//   apiKey: "AIzaSyDnveEYBBtwYLLyzFnklwVf6a-gVsDbQUo",
//   authDomain: "academicplanner-b760c.firebaseapp.com",
//   databaseURL: "https://academicplanner-b760c.firebaseio.com",
//   storageBucket: "academicplanner-b760c.appspot.com",
//   messagingSenderId: "899304504517"
// };
@NgModule({
  declarations: [
    MyApp,
    TodayPage,
    TodoPage,
    HomePage,
    TabsPage,
    NewTaskPage,
    CoursesPage,
    About2Page,
    SettingsPage,
    AddCoursePage,
    LoginPage,
    SignUpPage,
    LogOutPage,
    ForgotPasswordPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodayPage,
    TodoPage,
    HomePage,
    TabsPage,
    NewTaskPage,
    CoursesPage,
    About2Page,
    SettingsPage,
    AddCoursePage,
    LoginPage,
    SignUpPage,
    LogOutPage,
    ForgotPasswordPage


  ],
  providers: GetProviders()
})
export class AppModule {}
