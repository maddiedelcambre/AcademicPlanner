import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { NewTaskPage } from '../new-task/new-task';
import{ AngularFire, FirebaseListObservable} from 'angularfire2';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { AddCoursePage } from '../add-course/add-course';
import { TaskData } from '../../providers/data';
import firebase from 'firebase';



@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html'
})

export class TodoPage {
tasks: any;
 public TaskList: any;
public CourseList: any;

constructor(public navCtrl: NavController, public alertCtrl: AlertController,
public actionSheetCtrl: ActionSheetController, public taskData: TaskData) {}


ionViewDidEnter(){
    this.taskData.getTaskList().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          name: snap.val().name,

          date: snap.val().date,
        });
      return false
      });
      this.TaskList = rawList;
    });
    
  }



  NewTask(){
  this.navCtrl.push(NewTaskPage)
  }
  NewCourse(){
    this.navCtrl.push(AddCoursePage)
  }
}
