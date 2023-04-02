import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Idata} from '../Idata' 
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id !:number;
  orderItems !:string;
  restaurentName !:string;
  status !: string;
constructor(private http:HttpClient) { }
onSubmit() {
  this.http.delete<Idata>('http://localhost:5189/api/OrderServices/7')
  .subscribe(() => this.status = 'Delete successful');
}

}
