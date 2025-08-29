import { Test, TestingModule } from '@nestjs/testing';
import { EcoenergixxController } from './ecoenergixx.controller';
import { EcoenergixxService } from './ecoenergixx.service';

describe('EcoenergixxController', () => {
  let controller: EcoenergixxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EcoenergixxController],
      providers: [EcoenergixxService],
    }).compile();

    controller = module.get<EcoenergixxController>(EcoenergixxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
