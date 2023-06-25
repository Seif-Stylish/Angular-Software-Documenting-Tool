import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute , private coursesService: CoursesService) { }

  allCourses: any[] = this.coursesService.getCourses();

  singleCourse: any = {};

  id: any = this.activatedRoute.snapshot.params["id"];

  phaseName: any = this.activatedRoute.snapshot.params["phaseName"];

  findSingleCourse()
  {
    for(var i = 0; i < this.allCourses.length; i++)
    {
      if(this.allCourses[i].id == this.id)
      {
        this.singleCourse = this.allCourses[i];
        break;
      }
    }
  }

  

  //name: any = this.activatedRoute.snapshot.params["name"];

  ngOnInit(): void {

    this.findSingleCourse();

  }

}
