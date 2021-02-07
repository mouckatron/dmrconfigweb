import { TestBed } from '@angular/core/testing';

import { DigitalChannelService } from './digital-channel.service';

describe('DigitalChannelService', () => {
  let service: DigitalChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
