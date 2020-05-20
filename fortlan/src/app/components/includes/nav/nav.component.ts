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
    this.navCheck();
  }

  navCheck() {
    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");
    var a = document.getElementsByTagName("a");

    document.onclick = check;
    navMenuDiv.onclick = hideMenu;
    function check(e) {
      var target = (e && e.target) || (event && event.srcElement);

      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else { navMenuDiv.classList.add("hidden"); }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add("hidden");
        }
      }

    }

    function hideMenu() {
      navMenuDiv.classList.add("hidden");
      window.scrollTo(0,0);
    }

    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t == elm) { return true; }
        t = t.parentNode;
      }
      return false;
    }
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
