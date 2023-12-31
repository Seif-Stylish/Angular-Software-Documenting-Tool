import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormVisibleService } from '../Services/form-visible.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router , private formService: FormVisibleService) { }

  fService: any = this.formService;
  

  ngOnInit(): void {
  }

}
