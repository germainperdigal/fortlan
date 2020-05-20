import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { UserComponent } from 'app/user/user.component';
import { MatchComponent } from 'app/match/match.component';
import { LoginComponent } from 'app/login/login.component';
import { AuthGuardService } from 'app/services/auth-guard.service';
import { ListingComponent } from 'app/listing/listing.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuardService] },
    { path: 'utilisateurs',   component: UserProfileComponent, canActivate: [AuthGuardService] },
    { path: 'utilisateur/:id',   component: UserComponent, canActivate: [AuthGuardService] },
    { path: 'match/:id',   component: MatchComponent, canActivate: [AuthGuardService] },
    { path: 'games',     component: TableListComponent, canActivate: [AuthGuardService] },
    { path: 'history',     component: ListingComponent, canActivate: [AuthGuardService] },
    { path: 'connexion',          component: LoginComponent }
];
