import { Component, OnInit } from '@angular/core';
import { DataService } from './Services/data.service';
import { FormVisibleService } from './Services/form-visible.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  title = 'project-app-2';


  ngOnInit(): void {
    
  }
}
