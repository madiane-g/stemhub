import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudyComponent } from './study/study.component';
import { ScienceComponent } from './science/science.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'study', component: StudyComponent },
  {path: 'science', component: ScienceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
