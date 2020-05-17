import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  games;
  ngOnInit(): void {
    this.loadWeekGames();
  }

  loadWeekGames() {
    this.api.fetchWeekGames().then(games => {
      this.games = games;
    })
  }

  join(id) {
    this.api.joinGame(id);
  }

}
