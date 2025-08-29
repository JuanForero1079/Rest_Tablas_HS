import { Test, TestingModule } from '@nestjs/testing';
import { PanelesNoSpecController } from './paneles--no-spec.controller';
import { PanelesNoSpecService } from './paneles--no-spec.service';

describe('PanelesNoSpecController', () => {
  let controller: PanelesNoSpecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PanelesNoSpecController],
      providers: [PanelesNoSpecService],
    }).compile();

    controller = module.get<PanelesNoSpecController>(PanelesNoSpecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
