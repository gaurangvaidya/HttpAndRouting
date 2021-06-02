import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { PostService } from './post.service';
import { SpinnerHttpInterceptor } from './httpinterceptor';
import { SecondComponentComponent } from './second-component/second-component.component';
import { PostAndSpinnerComponent } from './post-and-spinner/post-and-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SpinnerComponent,
    SecondComponentComponent,
    PostAndSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [PostService,{provide:HTTP_INTERCEPTORS,useClass:SpinnerHttpInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
