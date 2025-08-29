import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PanelesNoSpecService } from './paneles--no-spec.service';
import { CreatePanelesNoSpecDto } from './dto/create-paneles--no-spec.dto';
import { UpdatePanelesNoSpecDto } from './dto/update-paneles--no-spec.dto';

@Controller('paneles--no-spec')
export class PanelesNoSpecController {
  constructor(private readonly panelesNoSpecService: PanelesNoSpecService) {}

  @Post()
  create(@Body() createPanelesNoSpecDto: CreatePanelesNoSpecDto) {
    return this.panelesNoSpecService.create(createPanelesNoSpecDto);
  }

  @Get()
  findAll() {
    return this.panelesNoSpecService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.panelesNoSpecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePanelesNoSpecDto: UpdatePanelesNoSpecDto) {
    return this.panelesNoSpecService.update(+id, updatePanelesNoSpecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.panelesNoSpecService.remove(+id);
  }
}
