import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl: string = "https://fifbet.com:1122/";
  token: string = "Bearer ";

  constructor(private httpClient: HttpClient, private router: Router, private toastr: ToastrService) { }

  createMatch(label, cashprize, game) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '0051d02e0ff305df8894456542f9c2e9f2011d7b81d7fe2a88440b0244adcb7e'
    });
    let options = { headers: headers }
    var postData = {label: label, cashprize: cashprize, game: new Date(game).toISOString()};
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.apiBaseUrl + 'match/', postData, options).subscribe(data => {
        resolve(data);
        this.toastr.success("Match créé !");
      }, err => {
        this.toastr.error("Une erreur est survenue lors de la création du match !");
      });
    });
  }

  getSubscriptions() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '0051d02e0ff305df8894456542f9c2e9f2011d7b81d7fe2a88440b0244adcb7e'
    });
    let options = { headers: headers }
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.apiBaseUrl + 'admin/subscriptions', options).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastr.error("Impossible de charger les utilisateurs !");
      });
    });
  }

  getMatchesCount() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '0051d02e0ff305df8894456542f9c2e9f2011d7b81d7fe2a88440b0244adcb7e'
    });
    let options = { headers: headers }
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.apiBaseUrl + 'admin/count/matches', options).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastr.error("Impossible de charger le nombre de games !");
      });
    });
  }

  listUsers() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '0051d02e0ff305df8894456542f9c2e9f2011d7b81d7fe2a88440b0244adcb7e'
    });
    let options = { headers: headers }
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.apiBaseUrl + 'admin/users', options).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastr.error("Impossible de charger les utilisateurs !");
      });
    });
  }

  getUsers() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '0051d02e0ff305df8894456542f9c2e9f2011d7b81d7fe2a88440b0244adcb7e'
    });
    let options = { headers: headers }
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.apiBaseUrl + 'admin/count/users', options).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastr.error("Impossible de charger les utilisateurs !");
      });
    });
  }

  getUser(user) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '0051d02e0ff305df8894456542f9c2e9f2011d7b81d7fe2a88440b0244adcb7e'
    });
    let options = { headers: headers }
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.apiBaseUrl + 'user/'+user, options).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastr.error("Impossible de charger les infos. de l'utilisateur !");
      });
    });
  }

  getMatches() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '0051d02e0ff305df8894456542f9c2e9f2011d7b81d7fe2a88440b0244adcb7e'
    });
    let options = { headers: headers }
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.apiBaseUrl + 'admin/matches', options).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastr.error("Impossible de charger les matches !");
      });
    });
  }

  getMatch(match) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '0051d02e0ff305df8894456542f9c2e9f2011d7b81d7fe2a88440b0244adcb7e'
    });
    let options = { headers: headers }
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.apiBaseUrl + 'admin/match/'+match, options).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastr.error("Impossible de charger les infos. du match !");
      });
    });
  }

  updateUser(id, freebet) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '0051d02e0ff305df8894456542f9c2e9f2011d7b81d7fe2a88440b0244adcb7e'
    });
    let options = { headers: headers }
    var postData = {freebet: freebet, id: id};
    return new Promise((resolve, reject) => {
      this.httpClient.patch(this.apiBaseUrl + 'admin/user', postData, options).subscribe(data => {
        resolve(data);
        this.toastr.success("Utilisateur mis à jour !");
      }, err => {
        this.toastr.error("Une erreur est survenue lors de la mise à jour !");
      });
    });
  }

  updateMatch(id, winner) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '0051d02e0ff305df8894456542f9c2e9f2011d7b81d7fe2a88440b0244adcb7e'
    });
    let options = { headers: headers }
    var postData = { winner: winner };
    return new Promise((resolve, reject) => {
      this.httpClient.patch(this.apiBaseUrl + 'match/winner/'+id, postData, options).subscribe(data => {
        resolve(data);
        this.router.navigateByUrl('/games');
        this.toastr.success("Match mis à jour !");
      }, err => {
        this.toastr.error("Une erreur est survenue lors de la MAJ du match !");
      });
    });
  }

  loginUser(pseudo, password) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers }
    var postData = { pseudo: pseudo, password: password };
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.apiBaseUrl + 'admin/login', postData, options).subscribe(data => {
        resolve(data);
        this.token += data['token'];
        localStorage.setItem('adminToken', this.token);
        this.toastr.success("Bienvenue !");
        this.router.navigateByUrl('/#/dashboard');
      }, err => {
        this.toastr.error("Erreur lors de la connexion !");
      });
    });
  }

}
