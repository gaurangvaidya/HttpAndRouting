import { Component, OnInit } from '@angular/core';
import { SpinnerserviceService } from './spinnerservice.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {


  showSpinner:boolean = false;
  constructor(private service:SpinnerserviceService) { }

  ngOnInit(): void {

    this.service.getSpinnerObservable().subscribe((data)=>{
      this.showSpinner = data==="start";
    })
  }





}
