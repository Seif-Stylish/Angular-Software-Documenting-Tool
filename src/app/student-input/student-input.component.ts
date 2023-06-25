import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-student-input',
  templateUrl: './student-input.component.html',
  styleUrls: ['./student-input.component.css']
})
export class StudentInputComponent implements OnInit {

  constructor(private dataService: DataService) { }

  userName: string = "";

  college: string = "";

  department: string = "";

  allStudentsArray: any[] = [];


  addStudent()
  {
    this.dataService.addStudent(this.userName , this.college , this.department);
    var allInputs = Array.from(document.querySelectorAll("input"));
    for(var i = 0; i < allInputs.length; i++)
    {
      allInputs[i].value = "";
    }
  }

  /*
  getStudents()
  {
    this.allStudentsArray = this.dataService.getStudents();
  }
  */

  ngOnInit(): void {
    //this.getStudents();
  }

}
