import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../Services/courses.service';
import { FormVisibleService } from '../Services/form-visible.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router , private coursesService: CoursesService ,  private formService: FormVisibleService) { }

  fService: any = this.formService;

  //x: any = this.coursesService.x;

  

  goToHome()
  {
    this.router.navigateByUrl("/");
  }

  courses: any[] = [];

  initCourses()
  {
    this.courses = this.coursesService.getCourses();
  }

  ngOnInit(): void {

    this.initCourses();

  }

}
