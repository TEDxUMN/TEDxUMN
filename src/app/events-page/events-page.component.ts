import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  public events: Entry<any>[] = [];
  public selectedSpeaker: any;

  @ViewChild('speakerDesc') SpeakerDesc: ElementRef;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getEvents()
      .then(events => {
          console.log(events);
          return events;
      })
      .then(this.sort_by_date)
      .then(events => this.events = events)
      .then(console.log);
  }

  private sort_by_date(events) {
    return events.sort(function(a, b) {
      return new Date(b.fields.eventDate).getTime() - new Date(a.fields.eventDate).getTime(); 
    });
  }

  public selectSpeaker(speaker) {
    if (speaker !== this.selectedSpeaker) {
      this.selectedSpeaker = speaker;
    } else {
      this.selectedSpeaker = null;
    }
  }
}
