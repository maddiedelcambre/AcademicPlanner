import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import{ AngularFire, FirebaseListObservable} from 'angularfire2';
import{ TaskData } from '../../providers/data';

@Component({
  selector: 'page-add-course',
  templateUrl: 'add-course.html'
})
export class AddCoursePage {
  public event = {
    timeDue: '08:00',
    dueDate: '2017-01-01'
  }
  courses: FirebaseListObservable<any>
  constructor(public navCtrl: NavController, public navParams: NavParams, public taskData: TaskData) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCoursePage');
  }

  createCourse(courseName: string, location: string, startTime: string, DaysOfWeek: string, professor: string, profEmail: string) {
      this.taskData.createCourse(courseName, location, startTime, DaysOfWeek, professor, profEmail).then( () => {
        this.navCtrl.pop()
      });

    }
}
