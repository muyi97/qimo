import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstellationListComponent } from './components/constellation-list/constellation-list.component';
import { ConstellationDetailComponent } from './components/constellation-detail/constellation-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'constellation-list', pathMatch: 'full' },
  { path: 'constellation-list', component: ConstellationListComponent },
  { path: 'constellation-detail/:id', component: ConstellationDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
