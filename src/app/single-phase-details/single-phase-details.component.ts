import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SdlcDataService } from '../Services/sdlc-data.service';

@Component({
  selector: 'app-single-phase-details',
  templateUrl: './single-phase-details.component.html',
  styleUrls: ['./single-phase-details.component.css']
})
export class SinglePhaseDetailsComponent implements OnInit {

  constructor(private sdlc: SdlcDataService , private activatedRoute: ActivatedRoute) { }

  sdlcCopy: any = this.sdlc;

  singlePhaseObject: any;


  id: any = this.activatedRoute.snapshot.params["id"];

  phaseName: any = this.activatedRoute.snapshot.params["phaseName"];

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( (newParams)=>
    {
      this.id = newParams["id"];
      this.phaseName = newParams["phaseName"];

      if(this.phaseName == "initiation")
      {
        for(var i = 0; i < this.sdlc.initiation.length; i++)
        {
          if(this.sdlc.initiation[i].id == this.id)
          {
            this.singlePhaseObject = this.sdlc.initiation[i];
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
            this.singlePhaseObject = this.sdlc.analysis[i];
            break;
          }
        }
      }

    } );

  }

}
