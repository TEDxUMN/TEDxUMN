import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  public boardMembers: any = [{
    "name": "Alex Kafer",
    "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAbrAAAAJDFkYTUxM2QxLTJjNzMtNDFhNS04ZTMyLTE5NjIxYjk3MjA1Nw.jpg"
  }];

  public team: any = [{
    "name": "Board",
    "members": this.boardMembers
  }];

  constructor() { }

  ngOnInit() {
  }

}
