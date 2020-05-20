import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user;
  freebet = 0;
  balance = 0;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
      this.api.getUser(this.route.snapshot.paramMap.get("id")).then(res => {
        this.user = res;
      });
    }

}
