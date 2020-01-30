import { TestBed } from '@angular/core/testing';

import { RemoteComponentService } from './remote-component.service';

describe('RemoteComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoteComponentService = TestBed.get(RemoteComponentService);
    expect(service).toBeTruthy();
  });
});
