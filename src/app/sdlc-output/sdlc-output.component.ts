import { Component, OnInit } from '@angular/core';
import { SdlcDataService } from '../Services/sdlc-data.service';

@Component({
  selector: 'app-sdlc-output',
  templateUrl: './sdlc-output.component.html',
  styleUrls: ['./sdlc-output.component.css']
})
export class SdlcOutputComponent implements OnInit {

  constructor(private sdlc: SdlcDataService) { }

  sdlcCopy: any = this.sdlc;

  //x: any = this.sdlcCopy.design.image;

  deletePhase(id: any , phaseName: any)
  {
    var index = -1;

    if(phaseName == "initiation")
    {
      for(var i = 0; i < this.sdlc.initiation.length; i++)
      {
        if(this.sdlc.initiation[i].id == id)
        {
          index = i;
          break;
        }
      }
      this.sdlc.initiation.splice(index , 1);
    }

    else if(phaseName == "analysis")
    {
      for(var i = 0; i < this.sdlc.analysis.length; i++)
      {
        if(this.sdlc.analysis[i].id == id)
        {
          index = i;
          break;
        }
      }
      this.sdlc.analysis.splice(index , 1);
    }

  }

  ngOnInit(): void {

  }

}
