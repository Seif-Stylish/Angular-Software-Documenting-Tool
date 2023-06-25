import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  courses: any[] = [
    {id: 1 , name: "software documenting"},
    {id: 2 , name: "software engineering 1"},
    {id: 3 , name: "software engineering 2"}
  ]

  constructor() { }


  
  
  getCourses()
  {
    return this.courses;
  }



}
