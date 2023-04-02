import { Component , OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Projectapp';
  result:any;
  constructor(private http:HttpClient)
  {
      this.http.get("http://localhost:5189/api/OrderServices").subscribe(data=>{console.log(data)} ,
      err=>{console.log("error occured")}
      );
  }
  ngOnInit() {
  }
}
