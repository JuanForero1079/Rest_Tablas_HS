import { Module } from '@nestjs/common';
import { PanelesNoSpecService } from './paneles--no-spec.service';
import { PanelesNoSpecController } from './paneles--no-spec.controller';

@Module({
  controllers: [PanelesNoSpecController],
  providers: [PanelesNoSpecService],
})
export class PanelesNoSpecModule {}
