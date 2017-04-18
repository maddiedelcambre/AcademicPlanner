import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth';
/*
  Generated class for the LogOut page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-log-out',
  templateUrl: 'log-out.html'
})
export class LogOutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public AuthProvider: AuthProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogOutPage');
  }
GoHome(){
  this.navCtrl.push(TabsPage);
}

LogOutUser(){
  this.AuthProvider.logoutUser().then(() => {
       this.navCtrl.setRoot(LoginPage);
     });
}
}
