import { Component } from '@angular/core';
import{ AngularFire, FirebaseListObservable} from 'angularfire2';
import{ TaskData } from '../../providers/data';
import { NavController, AlertController, NavParams, ActionSheetController} from 'ionic-angular';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html'

})
export class NewTaskPage {
  public event = {
    timeDue: '08:00',
    dueDate: '2017-01-01'
  }
  tasks: FirebaseListObservable<any>
  public CourseList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public taskData: TaskData,
   public actionSheetCtrl:ActionSheetController, public alertCtrl: AlertController) {

  }
  ionViewDidLoad() {
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
  createTask(TaskName: string, TaskDate: string) {
      this.taskData.createTask(TaskName, TaskDate).then( () => {
        this.navCtrl.pop();
      });

}
}
