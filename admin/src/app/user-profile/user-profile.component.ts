import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users;
  p;
  searchText;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.api.listUsers().then(result => {
      this.users = result;
    })
  }

}
