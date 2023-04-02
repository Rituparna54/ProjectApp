import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Idata} from '../Idata' 
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id !:number;
  orderItems !:string;
  restaurentName !:string;
constructor(private http:HttpClient) { }
onSubmit()
{
  const formData={
    id:this.id,
    orderItems : this.orderItems,
  restaurentName : this.restaurentName
  };
  this.http.put<Idata>('http://localhost:5189/api/OrderServices/7',formData).subscribe({
    next : data => {
      this.id = data.id
    },
      error: error=>{
        console.error('Error saving Data: ',error)
      }
}) ;
}
}

