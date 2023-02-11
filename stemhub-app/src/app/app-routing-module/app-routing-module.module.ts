import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ResourcesComponent } from '../resources/resources.component';
import { StudyComponent } from '../study/study.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'study', component: StudyComponent },
  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
