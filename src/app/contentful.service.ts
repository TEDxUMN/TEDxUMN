import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'y1dvbtp2igep',
  accessToken: 'c9adbea1c0fb218aa26e42932cdb44736d806e55799b1ae1f0c8f350616fb2a1',

  contentTypeIds: {
    speaker: 'speaker',
    event: 'event',
    mainCTA: 'ticketLink'
  }
}

@Injectable()
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getEvents(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.event
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
