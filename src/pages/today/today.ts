import { Component } from '@angular/core';
import { NewTaskPage } from '../new-task/new-task';
import { NavController } from 'ionic-angular';
import { AddCoursePage} from '../add-course/add-course';
@Component({
  selector: 'page-today',
  templateUrl: 'today.html'
})
export class TodayPage {

  constructor(public navCtrl: NavController) {
  }
  NewTask(){
  this.navCtrl.push(NewTaskPage)
  }
  NewCourse(){
    this.navCtrl.push(AddCoursePage)
  }

}
