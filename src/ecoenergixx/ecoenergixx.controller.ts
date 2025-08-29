import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EcoenergixxService } from './ecoenergixx.service';
import { CreateEcoenergixxDto } from './dto/create-ecoenergixx.dto';
import { UpdateEcoenergixxDto } from './dto/update-ecoenergixx.dto';

@Controller('ecoenergixx')
export class EcoenergixxController {
  constructor(private readonly ecoenergixxService: EcoenergixxService) {}

  @Post()
  create(@Body() createEcoenergixxDto: CreateEcoenergixxDto) {
    return this.ecoenergixxService.create(createEcoenergixxDto);
  }

  @Get()
  findAll() {
    return this.ecoenergixxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ecoenergixxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEcoenergixxDto: UpdateEcoenergixxDto) {
    return this.ecoenergixxService.update(+id, updateEcoenergixxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ecoenergixxService.remove(+id);
  }
}
