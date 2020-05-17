import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ApiService } from '../../../services/api.service';
import { NotificationsService } from '../../../services/notifications.service';
import { AuthGuardService } from '../../../services/auth-guard.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  email;
  password;
  constructor(public ngxSmartModalService: NgxSmartModalService, private api: ApiService, private notify: NotificationsService, public authGuard: AuthGuardService) { }

  ngOnInit(): void {
  }

  login() {
    if (this.email && this.password) {
      this.api.login(this.email, this.password).then(result => {
        this.ngxSmartModalService.closeAll();
      })
    } else {
      this.notify.flashError("Merci de remplir tous les champs...");
    }
  }

}
