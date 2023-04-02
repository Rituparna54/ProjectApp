import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Idata } from '../Idata';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
public response :Observable<Idata[]>;
constructor(public service :SharedService){
  this.response=this.service.getPosts();
  console.log(this.response)
}
}
