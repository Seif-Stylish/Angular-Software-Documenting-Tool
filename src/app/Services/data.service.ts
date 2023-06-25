import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  students: any[] = [];

  constructor() { }

  addStudent(name: string , college: string , department: string)
  {
    this.students.push(
      {
        name: name,
        college: college,
        department: department
      }
    );
  }

  getStudents()
  {
    return this.students;
  }
  

  

}
