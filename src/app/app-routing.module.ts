import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AboutComponent } from './about/about.component';
import { AllDesignFilesComponent } from './all-design-files/all-design-files.component';
//import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomeComponent } from './home/home.component';
import { SinglePhaseDetailsComponent } from './single-phase-details/single-phase-details.component';
import { UpdateSDCLComponent } from './update-sdcl/update-sdcl.component';

const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "updateSDCL/:id/:phaseName" , component: UpdateSDCLComponent},
  {path: "singlePhaseDetails/:id/:phaseName" , component: SinglePhaseDetailsComponent},
  {path: "allDesignFiles" , component: AllDesignFilesComponent}

  /*
  {path: "courseDetails/:id" , component: CourseDetailsComponent , children: [
    {path: ":id/:name" , component: CourseDetailsComponent}
  ]},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
