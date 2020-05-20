import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { NotificationsService } from '../../../services/notifications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService, private notify: NotificationsService) { }

  games;
  user;
  winners = [];
  ngOnInit(): void {
    this.loadWeekGames();
    if(!this.user) {
      this.fetchUserDetails();
    }
      this.getWinners();
  }

  loadWeekGames() {
    this.api.fetchWeekGames().then(games => {
      this.games = games;
    })
  }
  
  checkMatch(id) {
    this.api.checkMatch(id).then(result => {
      return result;
    })
  }

  logout() {
    this.api.logout();
  }

  fetchUserDetails() {
    this.api.fetchUserDetails().then(user => {
      this.user = user;
    });
  }

  join(id) {
    this.api.joinGame(id).then(result => {
      this.notify.flashSuccess("Bien inscrit !");
      this.loadWeekGames();
    })
  }

  getWinners() {
    this.api.lastWeekWinners().then((matches:any) => {
      matches.forEach(match => {
        if(match.played) {
          this.winners.push(match);
        }
      });
    })
  }

}
