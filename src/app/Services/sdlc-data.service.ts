import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SdlcDataService {

  initiation: any[] = [];

  initiationCopy: any[] = [];

  analysis: any[] = [];

  analysisCopy: any[] = [];

  design: any[] = [];

  designCopy: any[] = [];

  addInitiation(project_title: any , project_start_date: any , project_end_date: any , project_ojectives: any , project_manager: any , project_information: any , project_scope_statements: any)
  {
    this.initiation.push(
      {
        id: 0,
        phaseName: "initiation",
        project_title: project_title,
        project_start_date: project_start_date,
        project_end_date: project_end_date,
        project_objectives: project_ojectives,
        project_manager: project_manager,
        project_information: project_information,
        project_scope_statements: project_scope_statements

      }
    )

    this.initiationCopy.push(
      {
        id: 0,
        phaseName: "initiation",
        project_title: project_title,
        project_start_date: project_start_date,
        project_end_date: project_end_date,
        project_objectives: project_ojectives,
        project_manager: project_manager,
        project_information: project_information,
        project_scope_statements: project_scope_statements
      }
    )

    this.initiation[this.initiation.length - 1].id = this.initiationCopy.length;

  }

  addAnalysis(introduction: any , purpose_of_software_being_developed: any , intended_audience: any , overall_description_of_the_software: any , system_features_and_requirements: any)
  {
    this.analysis.push(
      {
        id: 0,
        phaseName: "analysis",
        introduction: introduction,
        purpose_of_software_being_developed: purpose_of_software_being_developed,
        intended_audience: intended_audience,
        overall_description_of_the_software: overall_description_of_the_software,
        system_features_and_requirements: system_features_and_requirements
      }
    )

    this.analysisCopy.push(
      {
        id: 0,
        phaseName: "analysis",
        introduction: introduction,
        purpose_of_software_being_developed: purpose_of_software_being_developed,
        intended_audience: intended_audience,
        overall_description_of_the_software: overall_description_of_the_software,
        system_features_and_requirements: system_features_and_requirements
      }
    )

    this.analysis[this.analysis.length - 1].id = this.analysisCopy.length;

  }

  addDesign(fileNames: any[] , images: any[])
  {
    this.design.push(
      {
        id: 0,
        fileName: fileNames,
        image: images,
      }
    )

    this.designCopy.push(
      {
        id: 0,
        fileName: fileNames,
        image: images,
      }
    )

    this.design[this.design.length - 1].id = this.designCopy.length;
    
  }

  constructor() { }
}
