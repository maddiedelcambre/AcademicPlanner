import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewTaskPage } from '../new-task/new-task';
import { AddCoursePage} from '../add-course/add-course';
/*
  Generated class for the About2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about2',
  templateUrl: 'about2.html'
})
export class About2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad About2Page');
  }
  NewTask(){
  this.navCtrl.push(NewTaskPage)
  }
  NewCourse(){
    this.navCtrl.push(AddCoursePage)
  }

}
