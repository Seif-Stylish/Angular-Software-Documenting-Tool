import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormVisibleService {

  isVisible: any = 1;

  makeFormVisible()
  {
    this.isVisible = 1;
  }

  makeFormInVisible()
  {
    this.isVisible = 0;
  }

  getIsVisible()
  {
    return this.isVisible;
  }

  constructor() { }
}
