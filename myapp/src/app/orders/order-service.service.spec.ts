import { TestBed } from '@angular/core/testing';

import { OrderServiceService } from './order-service.service';

describe('OrderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderServiceService = TestBed.get(OrderServiceService);
    expect(service).toBeTruthy();
  });
});
