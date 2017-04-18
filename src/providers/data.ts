import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class TaskData {
  public currentUser: string;
  public TaskList: firebase.database.Reference;
  public CourseList: firebase.database.Reference;

  constructor() {
    this.currentUser = firebase.auth().currentUser.uid;
    this.TaskList = firebase.database().ref(`userTask/${this.currentUser}/taskList`);
    this.CourseList = firebase.database().ref(`userCourse/${this.currentUser}/courseList`);
  }




getTaskList(): firebase.database.Reference {
   return this.TaskList;
 }

 createTask(TaskName: string, TaskDate: string): firebase.Promise<any> {
    return this.TaskList.push({
      name: TaskName,
      date: TaskDate
    });
  }

createCourse(courseName: string, location: string, startTime: string, DaysOfWeek: string, professor: string, profEmail: string): firebase.Promise<any>{
  return this.CourseList.push({
    crName: courseName,
    courseLocation: location,
    time: startTime,
    doWeek: DaysOfWeek,
    profName: professor,
    professorEmail: profEmail
  })
}

getCourseList():firebase.database.Reference {
  return this.CourseList;
}


}
