import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  match;
  winner;
  constructor(private route: ActivatedRoute, public api: ApiService) { }

  ngOnInit(): void {
    if(!this.match) {
      this.api.getMatch(this.route.snapshot.paramMap.get("id")).then(res => {
        this.match = res;
      });
    }
  }

  loadMatch() {
    this.api.getMatch(this.route.snapshot.paramMap.get("id")).then(res => {
      this.match = res;
    });
  }

  setWinner() {
    this.api.updateMatch(this.route.snapshot.paramMap.get("id"), this.winner);
  }



}
