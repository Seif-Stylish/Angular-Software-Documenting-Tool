import { Component, OnInit } from '@angular/core';
import { FormVisibleService } from '../Services/form-visible.service';
import { SdlcDataService } from '../Services/sdlc-data.service';
import * as $ from "jquery"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  constructor(private formService: FormVisibleService , private sdlc: SdlcDataService) { }

  // private activatedRoute: ActivatedRoute

  sdlcCopy: any = this.sdlc;

  selectValue: any = "initiation";

  // initiation

  project_title: any = "";

  project_start_date: any = "";

  project_end_date: any = "";

  project_ojectives: any = "";

  project_manager: any = "";

  project_information: any = "";

  project_scope_statements: any = "";


  

  // analysis

  introduction: any = "";

  purpose_of_software_being_developed: any = "";

  intended_audience: any = "";

  overall_description_of_the_software: any = "";

  system_features_and_requirements: any = "";

  clearInputs()
  {
    var inputs = Array.from(document.querySelectorAll("input"));
    for(var i = 0; i < inputs.length; i++)
    {
      inputs[i].value = "";
    }
  }


  // isEmptyInitiationPhaseInput: any = 0;

  addInitiation()
  {

    if(this.project_title == "" || this.project_start_date == "" || this.project_end_date == "" || this.project_ojectives == "" || this.project_manager == "" || this.project_information == "" || this.project_scope_statements == "")
    {
      $(".allInputsAreRequired").slideDown(500);
    }

    
    else
    {
      this.sdlc.addInitiation(this.project_title , this.project_start_date , this.project_end_date , this.project_ojectives , this.project_manager , this.project_information , this.project_scope_statements);
      this.clearInputs();

      this.project_title = "";
      this.project_start_date = "";
      this.project_end_date = "";
      this.project_ojectives = "";
      this.project_manager = "";
      this.project_information = "";
      this.project_scope_statements = "";
      //this.isEmptyInitiationPhaseInput = 0;
      $(".allInputsAreRequired").slideUp(500);
    }
    
  }

  addAnalysis()
  {
    if(this.introduction == "" || this.purpose_of_software_being_developed == "" || this.intended_audience == "" || this.overall_description_of_the_software == "" || this.system_features_and_requirements == "")
    {
      $(".allInputsAreRequired").slideDown(500);
    }

    else
    {
      this.sdlc.addAnalysis(this.introduction , this.purpose_of_software_being_developed , this.intended_audience , this.overall_description_of_the_software , this.system_features_and_requirements);
      this.clearInputs();

      this.introduction = "";
      this.purpose_of_software_being_developed = "";
      this.intended_audience = "";
      this.overall_description_of_the_software = "";
      this.system_features_and_requirements = "";
      $(".allInputsAreRequired").slideUp(500);
    }
  }

  makeFormInVisible()
  {
    this.formService.makeFormInVisible();
  }

  

  designPhaseArray: any[] = [];

  designPhaseValue: any[] = [];  // [abc , xyz , xxx]

  designImageValue: any[] = [];

  addDesignPhaseInArray()
  {
    this.designPhaseArray.push(1);
  }

  /*
  removeDesignPhaseFromArray()
  {
    this.designPhaseArray.pop();
    this.designPhaseValue.pop();
    this.designImageValue.pop();
  }
  */

  resetDesignForm()
  {
    this.designPhaseArray = [1];
    this.designPhaseValue = [];
    this.designImageValue = [];
  }

  resetFormInputs()
  {
    this.clearInputs();

    this.project_title = "";
    this.project_start_date = "";
    this.project_end_date = "";
    this.project_ojectives = "";
    this.project_manager = "";
    this.project_information = "";
    this.project_scope_statements = "";

    this.introduction = "";
    this.purpose_of_software_being_developed = "";
    this.intended_audience = "";
    this.overall_description_of_the_software = "";
    this.system_features_and_requirements = "";

  }

  addDesign()
  {
    this.sdlc.addDesign(this.designPhaseValue , this.designImageValue);

    this.resetDesignForm();
  }

  uploadImage(files: any)
  {
    const file = <File>files[0];
    const reader = new FileReader();

    reader.onload = ()=>
    {
      const imgSrc = reader.result;

      this.designImageValue.push(imgSrc);
      
    }

    reader.readAsDataURL(file);
  }




  ngOnInit(): void {

    // this.isEmptyInitiationPhaseInput = 0;

    // this.activatedRoute.params.subscribe( (newParams)=>
    // {
    //   this.isEmptyInitiationPhaseInput = newParams["isEmptyInitiationPhaseInput"];
    // } );

    this.designPhaseArray = [1];

  }

}
