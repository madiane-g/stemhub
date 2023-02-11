import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module/app-routing-module.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudyComponent } from './study/study.component';
import { ResourcesComponent } from './resources/resources.component';
import { ScienceComponent } from './science/science.component';
import { TechnologyComponent } from './technology/technology.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { MathComponent } from './math/math.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudyComponent,
    ResourcesComponent,
    ScienceComponent,
    TechnologyComponent,
    EngineeringComponent,
    MathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'study', component: StudyComponent },
      { path: 'resources', component: ResourcesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
