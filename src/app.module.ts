import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { EcoenergixxModule } from './ecoenergixx/ecoenergixx.module';
import { PrismaModule } from './prisma/prisma.module';
import { MarcasModule } from './marcas/marcas.module';
import { PanelesNoSpecModule } from './paneles--no-spec/paneles--no-spec.module';
import { PanelesModule } from './paneles/paneles.module';

@Module({
  imports: [CarsModule, EcoenergixxModule, PrismaModule, MarcasModule, PanelesNoSpecModule, PanelesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
