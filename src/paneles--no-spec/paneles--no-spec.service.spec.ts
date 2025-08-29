import { Test, TestingModule } from '@nestjs/testing';
import { PanelesNoSpecService } from './paneles--no-spec.service';

describe('PanelesNoSpecService', () => {
  let service: PanelesNoSpecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PanelesNoSpecService],
    }).compile();

    service = module.get<PanelesNoSpecService>(PanelesNoSpecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
