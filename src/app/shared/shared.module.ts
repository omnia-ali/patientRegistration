import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GroupListComponent } from './group-list/group-list.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';



@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    GroupListComponent,
    TodoTaskComponent,
    

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ]
  , exports: [
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    //RxReactiveFormsModule,

    BrowserAnimationsModule,
    NavbarComponent,
    SidenavComponent,
    GroupListComponent,
    TodoTaskComponent
  ]
})
export class SharedModule { }
