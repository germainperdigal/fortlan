import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  matches;
  sub;
  searchText;
  constructor(private api: ApiService, public router: Router) { }

  ngOnInit() {
    this.loadMatches();
  }

  loadMatches() {
    this.api.getMatches().then(result => {
      this.matches = result;
    });
  }

}
