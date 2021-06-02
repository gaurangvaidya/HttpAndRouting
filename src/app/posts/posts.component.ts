import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private service:PostService,private router:Router) { }

  ngOnInit(): void {
  }

  postsArray:any=null;

  getPosts()
  {
    this.service.getPosts()
    .subscribe((data)=>{
      this.postsArray = data;
      console.log(this.postsArray);
    })

  }

 
}
