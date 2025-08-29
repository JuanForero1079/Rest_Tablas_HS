import { Module } from '@nestjs/common';
import { PanelesService } from './paneles.service';
import { PanelesController } from './paneles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PanelesController],
  providers: [PanelesService],
})
export class PanelesModule {}
