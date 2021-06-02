import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerserviceService {

  constructor() { }

  private SpinnerSubject = new Subject<String>();



  getSpinnerObservable()
  {
    return this.SpinnerSubject.asObservable();
  }


  requestStarted()
  {
    this.SpinnerSubject.next("start");

  }

  requestEnded()
  {
    this.SpinnerSubject.next("end");
  }


}


