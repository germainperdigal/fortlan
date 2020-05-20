import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'app/services/api.service';
import { Router } from '@angular/router';
import 'rxjs/add/observable/interval';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  matches;
  sub;
  searchText;
  label;
  cashprize;
  date;
  hour;
  minute;
  constructor(private api: ApiService, public router: Router) { }

  ngOnInit() {

  }

  create() {
    var gameDate = this.date._d;
    gameDate = new Date(gameDate).setHours(this.hour);
    gameDate = new Date(gameDate).setMinutes(this.minute);
    this.api.createMatch(this.label, this.cashprize, new Date(gameDate).toISOString())
  }

}
