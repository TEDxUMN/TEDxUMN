import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-lineup',
  templateUrl: './event-lineup.component.html',
  styleUrls: ['./event-lineup.component.css']
})
export class EventLineupComponent implements OnInit {

  @Input() left: boolean = false;
  @Input() event: any;
  

  constructor() { }

  ngOnInit() {
  }
}
