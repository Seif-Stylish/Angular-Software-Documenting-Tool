import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-student-output',
  templateUrl: './student-output.component.html',
  styleUrls: ['./student-output.component.css']
})
export class StudentOutputComponent implements OnInit {

  constructor(private dataService: DataService) { }

  allStudentsArray: any[] = [];

  getStudents()
  {
    this.allStudentsArray = this.dataService.getStudents();
  }

  ngOnInit(): void {
    this.getStudents();
  }

}
