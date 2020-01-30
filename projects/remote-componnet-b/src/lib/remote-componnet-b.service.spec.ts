import { TestBed } from '@angular/core/testing';

import { RemoteComponnetBService } from './remote-componnet-b.service';

describe('RemoteComponnetBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoteComponnetBService = TestBed.get(RemoteComponnetBService);
    expect(service).toBeTruthy();
  });
});
