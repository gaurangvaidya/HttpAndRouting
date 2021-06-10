import { ConfigurableFocusTrap } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  toNavigate:boolean = false;

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(window.sessionStorage.getItem("isAllowed")==="true")
    {
      return true;
    }
    return this.router.navigateByUrl('/login');
    
    
  }

  canDeactivate(component:any){

    debugger;
    
    if(component.ngForm.dirty)
    {
        this.toNavigate = confirm("Are You Sure You Want To Redirect?");
        if(this.toNavigate)
        {
          return true;
        }
      
    }
    return false;
    

  }

}
