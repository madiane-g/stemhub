import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module/app-routing-module.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudyComponent } from './study/study.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'study', component: StudyComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
