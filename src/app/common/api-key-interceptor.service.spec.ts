import { TestBed } from '@angular/core/testing';

import { ApiKeyInterceptor } from './api-key-interceptor';

describe('ApiKeyInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiKeyInterceptor = TestBed.get(ApiKeyInterceptor);
    expect(service).toBeTruthy();
  });
});
