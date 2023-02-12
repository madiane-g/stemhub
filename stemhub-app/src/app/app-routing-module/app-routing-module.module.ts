import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ResourcesComponent } from '../resources/resources.component';
import { StudyComponent } from '../study/study.component';
import { ScienceComponent } from '../science/science.component';
import { TechnologyComponent } from '../technology/technology.component';
import { EngineeringComponent } from '../engineering/engineering.component';
import { MathComponent } from '../math/math.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'study', component: StudyComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'science', component: ScienceComponent},
  { path: 'technology', component: TechnologyComponent},
  { path: 'engineering', component: EngineeringComponent},
  { path: 'math', component: MathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
