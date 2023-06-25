import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SdlcDataService } from '../Services/sdlc-data.service';
import * as $ from "jquery";

@Component({
  selector: 'app-update-sdcl',
  templateUrl: './update-sdcl.component.html',
  styleUrls: ['./update-sdcl.component.css']
})
export class UpdateSDCLComponent implements OnInit {

  constructor(private sdlc: SdlcDataService , private activatedRoute: ActivatedRoute , private router: Router) { }

  id: any = this.activatedRoute.snapshot.params["id"];

  phaseName: any = this.activatedRoute.snapshot.params["phaseName"];


  // initiation

  project_title: any = "";

  project_start_date: any = "";

  project_end_date: any = "";

  project_objectives: any = "";

  project_manager: any = "";

  project_information: any = "";

  project_scope_statements: any = "";


  // analysis

  introduction: any = "";

  purpose_of_software_being_developed: any = "";

  intended_audience: any = "";

  overall_description_of_the_software: any = "";

  system_features_and_requirements: any = "";


  updateInitiationPhase()
  {

    if(this.project_title == "" || this.project_start_date == "" || this.project_end_date == "" || this.project_objectives == "" || this.project_manager == "" || this.project_information == "" || this.project_scope_statements == "")
    {
      $(".allInputsAreRequired").slideDown(500);
    }


    else
    {
      for(var i = 0; i < this.sdlc.initiation.length; i++)
      {
        if(this.sdlc.initiation[i].id == this.id)
        {
          this.sdlc.initiation[i].project_title = this.project_title;
          this.sdlc.initiation[i].project_start_date = this.project_start_date;
          this.sdlc.initiation[i].project_end_date = this.project_end_date;
          this.sdlc.initiation[i].project_objectives = this.project_objectives;
          this.sdlc.initiation[i].project_manager = this.project_manager;
          this.sdlc.initiation[i].project_information = this.project_information;
          this.sdlc.initiation[i].project_scope_statements = this.project_scope_statements;
          break;
        }
      }
      $(".allInputsAreRequired").slideUp(500);
      this.router.navigateByUrl("/");
    }
  }

  updateAnalysisPhase()
  {

    if(this.introduction == "" || this.purpose_of_software_being_developed == "" || this.intended_audience == "" || this.overall_description_of_the_software == "" || this.system_features_and_requirements == "")
    {
      $(".allInputsAreRequired").slideDown(500);
    }

    else
    {
      for(var i = 0; i < this.sdlc.analysis.length; i++)
      {
        if(this.sdlc.analysis[i].id == this.id)
        {
          this.sdlc.analysis[i].introduction = this.introduction;
          this.sdlc.analysis[i].purpose_of_software_being_developed = this.purpose_of_software_being_developed;
          this.sdlc.analysis[i].intended_audience = this.intended_audience;
          this.sdlc.analysis[i].overall_description_of_the_software = this.overall_description_of_the_software;
          this.sdlc.analysis[i].system_features_and_requirements = this.system_features_and_requirements;
          break;
        }
      }
      $(".allInputsAreRequired").slideUp(500);
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit(): void {


    




    this.activatedRoute.params.subscribe( (newParams)=>
    {
      this.id = newParams["id"];
      this.phaseName = newParams["phaseName"];
    } );


    if(this.phaseName == "initiation")
    {
      for(var i = 0; i < this.sdlc.initiation.length; i++)
      {
        if(this.sdlc.initiation[i].id == this.id)
        {
          this.project_title = this.sdlc.initiation[i].project_title;
          this.project_start_date = this.sdlc.initiation[i].project_start_date;
          this.project_end_date = this.sdlc.initiation[i].project_end_date;
          this.project_objectives = this.sdlc.initiation[i].project_objectives;
          this.project_manager = this.sdlc.initiation[i].project_manager;
          this.project_information = this.sdlc.initiation[i].project_information;
          this.project_scope_statements = this.sdlc.initiation[i].project_scope_statements;
          break;
        }
      }

    }
    else if(this.phaseName == "analysis")
    {
      for(var i = 0; i < this.sdlc.analysis.length; i++)
      {
        if(this.sdlc.analysis[i].id == this.id)
        {
          this.introduction = this.sdlc.analysis[i].introduction;
          this.purpose_of_software_being_developed = this.sdlc.analysis[i].purpose_of_software_being_developed;
          this.intended_audience = this.sdlc.analysis[i].intended_audience;
          this.overall_description_of_the_software = this.sdlc.analysis[i].overall_description_of_the_software;
          this.system_features_and_requirements = this.sdlc.analysis[i].system_features_and_requirements;
          break;
        }
      }
    }


  }

}
