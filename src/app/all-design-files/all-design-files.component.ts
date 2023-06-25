import { Component, OnInit } from '@angular/core';
import { SdlcDataService } from '../Services/sdlc-data.service';

@Component({
  selector: 'app-all-design-files',
  templateUrl: './all-design-files.component.html',
  styleUrls: ['./all-design-files.component.css']
})
export class AllDesignFilesComponent implements OnInit {

  constructor(private sdlc: SdlcDataService) { }
  
  sdlcCopy: any = this.sdlc;

  specificImage: any = "";

  showImage(index1: any , index2: any)
  {
    this.specificImage = this.sdlcCopy.design[index1].image[index2];

    //console.log(this.specificImage);
  }

  ngOnInit(): void {

    this.specificImage = this.sdlcCopy.design[0].image[0];

  }

}
