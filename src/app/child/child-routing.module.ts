import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { HomeComponent } from './home/home.component';
import { HomechildoneComponent } from './homechildone/homechildone.component';
import { HomechildtwoComponent } from './homechildtwo/homechildtwo.component';

const routes: Routes = [
  {
   
    path:"",
    
    
    component:HomeComponent

  },
  {
    path:"homeone",
    canActivate:[AuthGuardService],
    component:HomechildoneComponent
  },
  {
    path:"hometwo",
    canActivate:[AuthGuardService],
    component:HomechildtwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
