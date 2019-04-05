import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-meet-us',
  templateUrl: './meet-us.component.html',
  styleUrls: ['./meet-us.component.css']
})
export class MeetUsComponent implements OnInit {

  items = [
    { position: "Chief People Officer",
      name: "Spencer Krueger",
      description: "I can give you a job!",
      image: "/assets/useThis.jpg",
    },
    { position: "Director",
      name: "Lucas Vaz",
      description: "He can boss us around",
      image: "/assets/useThis.jpg",
    }
  ]

  public button: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getButtonText()
      .then(button => this.button = button)
  }

}