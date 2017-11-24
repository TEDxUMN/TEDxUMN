import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SpeakersBarComponent } from './speakers-bar/speakers-bar.component';
import { EventLineupComponent } from './event-lineup/event-lineup.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import { HomeComponent } from './home/home.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { PartnershipsPageComponent } from './partnerships-page/partnerships-page.component';
import { InvolvedPageComponent } from './involved-page/involved-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { IdeasComponent } from './ideas/ideas.component';
import { FormsModule } from '@angular/forms';
import { ContentfulService } from './contentful.service';

import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SpeakersBarComponent,
    EventLineupComponent,
    SponsersComponent,
    HomeComponent,
    EventsPageComponent,
    PartnershipsPageComponent,
    InvolvedPageComponent,
    AboutPageComponent,
    IdeasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
