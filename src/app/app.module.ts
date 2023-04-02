import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component' ;
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    OrderComponent,
    UpdateComponent,
    DeleteComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
