import { TestBed } from '@angular/core/testing';

import { NotiflyService } from './notifly.service';

describe('NotiflyService', () => {
  let service: NotiflyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotiflyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
