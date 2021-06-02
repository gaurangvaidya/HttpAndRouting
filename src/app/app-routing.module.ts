import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostAndSpinnerComponent } from './post-and-spinner/post-and-spinner.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  {

    path:'second',
    component:SecondComponentComponent,
    

  },
  {
    path:'post',
    component:PostAndSpinnerComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
