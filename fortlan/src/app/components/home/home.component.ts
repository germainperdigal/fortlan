import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NotificationsService } from '../../services/notifications.service';
import { FormGroup, FormBuilder, FormControl, Form, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  signForm: FormGroup;
  fname;
  lname;
  email;
  pseudo;
  password;
  repassword;
  winners = [];

  constructor(private api: ApiService, private notify: NotificationsService) { }

  ngOnInit(): void {
  }

  login() {
    if(this.email && this.fname && this.password && this.pseudo && this.pseudo) {
      if(this.password === this.repassword) {
        this.api.register(this.fname, this.lname, this.email, this.password, this.pseudo).then(nUser => {
          this.notify.flashSuccess("Bienvenue, votre compte a bien été créé !");
          this.email = "";
          this.fname = "";
          this.password = "";
          this.pseudo = "";
          this.repassword = "";
        });
      } else {
        this.notify.flashError("Les mots de passe ne correspondent pas..");
      }
    } else {
      this.notify.flashError("Merci de remplir tous les champs !");
    }
  }

}
