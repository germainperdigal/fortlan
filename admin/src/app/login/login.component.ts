import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pseudo;
  password;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  login() {
    this.api.loginUser(this.pseudo, this.password);
  }

}
