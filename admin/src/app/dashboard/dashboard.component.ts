import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  wins = 0;
  users : number = 0;
  code;
  matches = 0;
  constructor(private api: ApiService) { }
  
  ngOnInit() {
     this.api.getUsers().then((result:any) => {
       this.users = result;
     });
     this.api.getMatchesCount().then((result:any) => {
       this.matches = result;
     })
  }

}
