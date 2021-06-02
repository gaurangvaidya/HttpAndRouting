import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router:Router){}
  title = 'httpandroutes';


  goToSecond()
  {
    this.router.navigateByUrl('/second').then(e=>console.log(e));



  }

  goToPost()
  {
    this.router.navigateByUrl('/post').then(e=>console.log(e));
  }
}
