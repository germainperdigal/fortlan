import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { NotificationsService } from '../../../services/notifications.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teams;
  createTeam : boolean = false;
  newteam;
  team;

  constructor(private api: ApiService, private notify: NotificationsService) { }

  ngOnInit(): void {
    this.fetchTeams();
  }

  fetchTeams() {
    this.api.fetchTeams().then((teams:any) => {
      this.teams = teams.team;
    })
  };

  joinTeam() {
    if(this.team) {
      this.api.joinTeam(this.team);
      console.log(this.team);
    } else {
      this.notify.flashError("Merci de bien choisir une équipe..");
    }
  }

  switch() {
    this.createTeam = !this.createTeam;
  }

  addTeam() {
    if(this.newteam) {
      this.api.createTeam(this.newteam).then(result => {
        this.notify.flashSuccess("Votre équipe a bien été crée !")
      })
    } else {
      this.notify.flashError("Merci de remplir tous les champs..");
    }
  }

}
