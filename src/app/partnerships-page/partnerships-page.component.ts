import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-partnerships-page',
  templateUrl: './partnerships-page.component.html',
  styleUrls: ['./partnerships-page.component.css']
})
export class PartnershipsPageComponent implements OnInit {

  public partners: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getPartners()
    .then(partners => this.partners = partners).then(console.log);
  }

}
