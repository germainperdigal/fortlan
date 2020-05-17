import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeComponent as MemberHomeComponent } from './components/members/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'membre/accueil', component: MemberHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
