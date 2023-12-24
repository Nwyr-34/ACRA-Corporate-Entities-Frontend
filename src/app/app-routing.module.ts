import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateEntityComponent } from './pages/create-entity/create-entity.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'create-entity', component: CreateEntityComponent},
  { path: 'edit-entity/:id', component: CreateEntityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
