import { Test, TestingModule } from '@nestjs/testing';
import { GumonsController } from './gumons.controller';
import { GumonsService } from './gumons.service';

describe('GumonsController', () => {
  let controller: GumonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GumonsController],
      providers: [GumonsService],
    }).compile();

    controller = module.get<GumonsController>(GumonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
