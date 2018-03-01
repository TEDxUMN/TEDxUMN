import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { isDevMode } from '@angular/core';

const CONFIG = {
  space: 'y1dvbtp2igep',
  accessToken: 'c9adbea1c0fb218aa26e42932cdb44736d806e55799b1ae1f0c8f350616fb2a1',
  previewToken: '4bf6e874a4457dee888c41c1c32b4817c13feedfe35de9c3f575df788a7fdcde',
  contentTypeIds: {
    speaker: 'speaker',
    event: 'event',
    mainCTA: 'ticketLink',
    teamGroup: 'teamGroup',
    partners: 'partner'
  }
};

@Injectable()
export class ContentfulService {

  private cdaClient;

  constructor() {
    if (isDevMode()) {
      this.cdaClient = createClient({
        space: CONFIG.space,
        accessToken: CONFIG.previewToken,
        host: 'preview.contentful.com'
      });
      console.log('Using local');
    } else {
      this.cdaClient = createClient({
        space: CONFIG.space,
        accessToken: CONFIG.accessToken
      });
    }
  }

  getEvents(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.event
    }, query))
    .then(res => res.items);
  }

  getTeam(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.teamGroup
    }, query))
    .then(res => res.items);
  }

  getPartners(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.partners
    }, query))
    .then(res => res.items);
  }

  getButtonText(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.mainCTA
    }, query))
    .then(res => res.items);
  }

}
