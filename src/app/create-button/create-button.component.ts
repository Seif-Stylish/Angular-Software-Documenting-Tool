import { Component, OnInit } from '@angular/core';
import { FormVisibleService } from '../Services/form-visible.service';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.css']
})
export class CreateButtonComponent implements OnInit {

  constructor(private formService: FormVisibleService) { }

  makeFormVisible()
  {
    this.formService.makeFormVisible();
  }


  ngOnInit(): void {


  }

}
