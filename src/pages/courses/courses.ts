import { Component } from '@angular/core';
import { NavController, NavParams,  AlertController, ActionSheetController  } from 'ionic-angular';
import { NewTaskPage } from '../new-task/new-task';
import { AddCoursePage } from '../add-course/add-course';
import { TaskData } from '../../providers/data';
import firebase from 'firebase';
import { Injectable } from '@angular/core';
import{ AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html'
})

export class CoursesPage {
  courses: any;
  public CourseList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
  public actionSheetCtrl: ActionSheetController, public taskData: TaskData) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CoursesPage');
    this.taskData.getCourseList().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          crName: snap.val().crName,
          courseLocation: snap.val().courseLocation,
          time: snap.val().time,
          doWeek: snap.val().doWeek,
          profName: snap.val().profName,
          professorEmail: snap.val().professorEmail
        });
      return false
      });
      this.CourseList = rawList;
    });
  }
  NewTask(){
  this.navCtrl.push(NewTaskPage)
  }
  NewCourse(){
    this.navCtrl.push(AddCoursePage)
  }

//   doAlert(profName: string, profEmail: string) {
//   let alert = this.alertCtrl.create({
//     title: 'Professor Information ',
//
//     message: profName + profEmail,
//
//     buttons: ['Ok']
//   });
//   alert.present()
// }
}
