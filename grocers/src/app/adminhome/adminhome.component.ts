import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {


  //to retrieve value from router path we  use activateRoute:Activeroute
  constructor(public activeRoute:ActivatedRoute) { } //DI
  userName?:string;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data=>this.userName = data.username)
  }



}
