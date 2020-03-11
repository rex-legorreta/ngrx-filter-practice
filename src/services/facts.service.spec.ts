import { AppModule } from './../app/app.module';
import { FactsService } from './facts.service';
import { TestBed } from '@angular/core/testing';

describe('Facts Service', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
  );

  it('should be created', () => {
    const service: FactsService = TestBed.get(FactsService);

    expect(service).toBeTruthy();
  });
});
