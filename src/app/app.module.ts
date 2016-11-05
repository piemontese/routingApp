import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
/*
      { path: 'hero/:id', component: HeroDetailComponent },
      { path: 'crisis-center', component: CrisisListComponent },
      {
        path: 'heroes',
        component: HeroListComponent,
        data: {
          title: 'Heroes List'
        }
      },
      { path: '**', component: PageNotFoundComponent }
*/
      { path: '', component: AppComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
