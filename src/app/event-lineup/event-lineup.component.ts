import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-lineup',
  templateUrl: './event-lineup.component.html',
  styleUrls: ['./event-lineup.component.css']
})
export class EventLineupComponent {

  public eventLogo = "http://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/0a8AAOSwBahVDB2H/$_32.JPG";
  
  @Input() left: boolean = false;
  
  public speakers: any = [{
    "name": "Ian Keller",
    "time": "4:05",
    "link": "http://www.google.com",
    'title': "On pride and Prejudice"
  },
  {
    "name": "Michelle Michaels",
    "time": "12:05",
    "link": "http://www.google.com"
  },
  {
    "name": "Thomas Warner",
    "time": "11:57",
    "link": "http://www.google.com"
  },
  {
    "name": "Jax Riddles",
    "time": "8:09",
    "link": "http://www.google.com"
  },
  {
    "name": "Anna Miles",
    "time": "13:15",
    "link": "http://www.google.com"
  }];

  constructor() { }
}
