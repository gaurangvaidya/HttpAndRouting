import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isUnsaved:boolean = true;

  constructor(private router:Router){}
  title = 'httpandroutes';

  id=20;

  goToSecond()
  {
    this.router.navigateByUrl('/second').then(e=>console.log(e));



  }

  goToPost()
  {
    this.id = 30;
    
    this.router.navigate(['/second',this.id]);
    // this.router.navigateByUrl('/post').then(e=>console.log(e));

  }
}
