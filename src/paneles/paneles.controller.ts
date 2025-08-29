import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PanelesService } from './paneles.service';
import { CreatePaneleDto } from './dto/create-panele.dto';
import { UpdatePaneleDto } from './dto/update-panele.dto';

@Controller('paneles')
export class PanelesController {
  constructor(private readonly panelesService: PanelesService) {}

  @Post()
  create(@Body() createPaneleDto: CreatePaneleDto) {
    return this.panelesService.create(createPaneleDto);
  }

  @Get()
  findAll() {
    return this.panelesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.panelesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaneleDto: UpdatePaneleDto) {
    return this.panelesService.update(+id, updatePaneleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.panelesService.remove(+id);
  }
}
