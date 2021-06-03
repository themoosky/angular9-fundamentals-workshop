import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Display courses using ngFor
  // STEP 02: Add event handler to select course
  // STEP 03: Display raw json of selected course
  currentCourse = null; 

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.resetSelectedCourse(); 
  }



  selectCourse(course){
    console.log(course); 
    this.currentCourse = course; 
  }
  deleteCourse(course){
    const {id} = course
    this.courses.filter((ele) => ele.id !== id); 
    console.log(this.courses); 
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '', 
      descriptioin: '', 
      percentComplete: 0, 
      favorite: false
    }
    this.currentCourse = emptyCourse; 
  }

  cancel(){
    this.resetSelectedCourse(); 
  }; 

  saveCourse(){
    
  }

}
