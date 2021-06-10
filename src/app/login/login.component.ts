import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authGuard:AuthGuardService) { }

  ngForm:any;
  ngOnInit(): void {
    window.localStorage.setItem("isAllowed","false");
  }

  onSubmit(f:any)
  {
  
    this.ngForm=f;
      if(f.valid)
      {
        window.sessionStorage.setItem("isAllowed","true");
      }

      this.router.navigateByUrl('/post')

    
  }

}
