import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
  export class OrderComponent {
    orderItems !:string;
    restaurentName !:string;
  constructor(private http:HttpClient) { }
  onSubmit()
  {
    const formData={
      orderItems : this.orderItems,
    restaurentName : this.restaurentName
    };
    this.http.post('http://localhost:5189/api/OrderServices',formData).subscribe(
      response=>{
        console.error('Data saved successfully : ',response);
      },
      error=>{
        console.error('Error saving Data: ',error)
      }
    ) ;
  }
  }
