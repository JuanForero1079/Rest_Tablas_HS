import { Test, TestingModule } from '@nestjs/testing';
import { EcoenergixxService } from './ecoenergixx.service';

describe('EcoenergixxService', () => {
  let service: EcoenergixxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EcoenergixxService],
    }).compile();

    service = module.get<EcoenergixxService>(EcoenergixxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
