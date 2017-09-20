import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  public speakers: any = [{
    "name": "Ian Keller",
    "image": "http://whysquare.co.nz/wp-content/uploads/2013/07/profile_square3-270x270.jpg"
  },
  {
    "name": "Michelle Michaels",
    "image": "http://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/Square-Profile-Pic-1-1.jpg"
  },
  {
    "name": "Thomas Warner",
    "image": "http://www.referralsaasquatch.com/assets/Outdoor-Square-Profile-Derek.jpg"
  },
  {
    "name": "Jax Riddles",
    "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkbAAAAJDBjNjJiMTUxLTY3ODQtNDkxOS05MTMxLWU5Y2YwOGFjZjU2Nw.jpg"
  },
  {
    "name": "Anna Miles",
    "image": "https://media.creativemornings.com/uploads/user/avatar/58109/AmandaNienaberProfile-square.jpg"
  }];

  constructor() { }

  ngOnInit() {

  }

}
