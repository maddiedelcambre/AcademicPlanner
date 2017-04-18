import { Component } from '@angular/core';
import { NewTaskPage } from '../new-task/new-task';
import { NavController } from 'ionic-angular';
import { AddCoursePage } from '../add-course/add-course';
import { LoginPage } from '../login/login';
import{ AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  
  }

  NewTask(){
  this.navCtrl.push(NewTaskPage)
  }
  NewCourse(){
    this.navCtrl.push(AddCoursePage)
  }
}
