import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-lineup',
  templateUrl: './event-lineup.component.html',
  styleUrls: ['./event-lineup.component.css']
})
export class EventLineupComponent implements OnInit {

  public eventLogo = "http://img.moviepostershop.com/titanic-movie-poster-1997-1020339699.jpg";
  
  @Input() left: boolean = false;
  @Input() event: any;
  
  // public speakers: any = [{
  //   "name": "Ian Keller",
  //   "time": "4:05",
  //   "link": "http://www.google.com",
  //   'title': "On pride and Prejudice"
  // },
  // {
  //   "name": "Michelle Michaels",
  //   "time": "12:05",
  //   "link": "http://www.google.com",
  //   'title': "Sup Lucy"
  // },
  // {
  //   "name": "Thomas Warner",
  //   "time": "11:57",
  //   "link": "http://www.google.com"
  // },
  // {
  //   "name": "Jax Riddles",
  //   "time": "8:09",
  //   "link": "http://www.google.com"
  // },
  // {
  //   "name": "Anna Miles",
  //   "time": "13:15",
  //   "link": "http://www.google.com"
  // }];

  constructor() { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("Pushing Event", this.event);
  }
}
