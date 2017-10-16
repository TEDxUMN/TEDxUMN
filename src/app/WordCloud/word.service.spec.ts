import { TestBed, inject } from '@angular/core/testing';

import { WsWordServiceService } from './ws-word-service.service';

describe('WsWordServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsWordServiceService]
    });
  });

  it('should be created', inject([WsWordServiceService], (service: WsWordServiceService) => {
    expect(service).toBeTruthy();
  }));
});
