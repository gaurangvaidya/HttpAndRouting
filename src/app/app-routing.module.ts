import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PostAndSpinnerComponent } from './post-and-spinner/post-and-spinner.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { SecondaComponent } from './seconda/seconda.component';

const routes: Routes = [

  {

    path:'second/:id',
    canActivate:[AuthGuardService],
    // canDeactivate:[AuthGuardService],
    component:SecondComponentComponent,
    data:{permission:'admin'},
   
    

  },
  {
    path:'post',
    canActivate:[AuthGuardService],    
    component:PostAndSpinnerComponent,
    data:{isAllowed:false}
  },
  {
    path:'home',

    
    loadChildren:() => import('./child/child.module').then(m=>m.ChildModule)
  },
  {
    path:'login',
    component:LoginComponent,
    canDeactivate:[AuthGuardService]

  },

  {
    path: 'app',
    component: AppComponent,
    canDeactivate:[AuthGuardService],
    canActivate:[AuthGuardService],
  //  canDeactivate:[false],
    
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
