import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl: string = "http://localhost:6544/";
  //apiBaseUrl: string = "https://fifbet.com:9865/";
  token: string = "Bearer ";

  constructor(private httpClient: HttpClient, private router: Router, private toastr: ToastrService) { }

  login(email: string, password: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers }
    let postData = { "email": email, "password": password }
    return new Promise((resolve) => {
      this.httpClient.post(this.apiBaseUrl + "user/login", postData, options).subscribe(data => {
        this.token += data['token'];
        localStorage.setItem('token', this.token);
        localStorage.setItem('email', email);
        this.toastr.success('Welcome !');
        this.router.navigateByUrl('/membre/accueil');
        resolve(data);
      }, err => {
        if (err["error"].message != undefined && err["error"].message != "" && err["error"].message != null) {
          this.toastr.error(err["error"].message, "Pas si vite");
        }
      });
    });
  }

  register(fname: string, lname: string, email: string, password: string, pseudo: string) {
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    });
    let options = { headers: headers }
    var postData = { 'fname': fname, 'lname': lname, 'password': password, 'email': email, 'pseudo': pseudo };
    return new Promise((resolve) => {
      this.httpClient.post(this.apiBaseUrl + "user/register", postData, options).subscribe(data => {
        resolve(data);
      }, err => {
        if (err["error"].message != undefined && err["error"].message != "" && err["error"].message != null) {
          if (err.status == 500)
            this.toastr.error("Oops..", "Impossible de vous inscrire, merci de réssayer plus tard !");
          else
            this.toastr.error("Oops..", err["error"].message);
        } else {
          this.toastr.error("Oops..", "Impossible de vous inscrire, merci de réssayer plus tard !");
        }
      });
    });
  }

  fetchWeekGames() {
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    });
    let options = { headers: headers }
    return new Promise((resolve) => {
      this.httpClient.get(this.apiBaseUrl + "match/week", options).subscribe(data => {
        resolve(data);
      }, err => {
          this.toastr.error("Oops..", "Impossible de charger les matchs de la semaine !");
        });
    });
  }

  joinGame(id) {

  }

}
