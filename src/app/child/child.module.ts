import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { HomeComponent } from './home/home.component';
import { HomechildoneComponent } from './homechildone/homechildone.component';
import { HomechildtwoComponent } from './homechildtwo/homechildtwo.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomechildoneComponent,
    HomechildtwoComponent
  ],
  imports: [
    CommonModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
