import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInputComponent } from './student-input/student-input.component';
import { StudentOutputComponent } from './student-output/student-output.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FormTestComponent } from './form-test/form-test.component';
import { CreateButtonComponent } from './create-button/create-button.component';
import { SdlcOutputComponent } from './sdlc-output/sdlc-output.component';
import { UpdateSDCLComponent } from './update-sdcl/update-sdcl.component';
import { PhaseDetailsComponent } from './phase-details/phase-details.component';
import { SinglePhaseDetailsComponent } from './single-phase-details/single-phase-details.component';
import { AllDesignFilesComponent } from './all-design-files/all-design-files.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentInputComponent,
    StudentOutputComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    CourseDetailsComponent,
    FormTestComponent,
    CreateButtonComponent,
    SdlcOutputComponent,
    UpdateSDCLComponent,
    PhaseDetailsComponent,
    SinglePhaseDetailsComponent,
    AllDesignFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
    /*ReactiveFormsModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
