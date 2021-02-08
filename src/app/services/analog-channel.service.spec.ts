import { TestBed } from '@angular/core/testing';

import { AnalogChannelService } from './analog-channel.service';

describe('AnalogChannelService', () => {
  let service: AnalogChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalogChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
