import { Module } from '@nestjs/common';
import { EcoenergixxService } from './ecoenergixx.service';
import { EcoenergixxController } from './ecoenergixx.controller';

@Module({
  controllers: [EcoenergixxController],
  providers: [EcoenergixxService],
})
export class EcoenergixxModule {}
