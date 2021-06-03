import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Course Outline'
  ourColor = 'blue';
  currentLesson = null;  
  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  updateColor() {
    this.ourColor = 'aqua'; 
  }; 

  selectLesson(lesson) {
    console.log('Lesson', lesson); 
    this.currentLesson = lesson; 
  }
};
