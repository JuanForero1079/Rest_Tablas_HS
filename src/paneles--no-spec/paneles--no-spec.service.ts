import { Injectable } from '@nestjs/common';
import { CreatePanelesNoSpecDto } from './dto/create-paneles--no-spec.dto';
import { UpdatePanelesNoSpecDto } from './dto/update-paneles--no-spec.dto';

@Injectable()
export class PanelesNoSpecService {
  create(createPanelesNoSpecDto: CreatePanelesNoSpecDto) {
    return 'This action adds a new panelesNoSpec';
  }

  findAll() {
    return `This action returns all panelesNoSpec`;
  }

  findOne(id: number) {
    return `This action returns a #${id} panelesNoSpec`;
  }

  update(id: number, updatePanelesNoSpecDto: UpdatePanelesNoSpecDto) {
    return `This action updates a #${id} panelesNoSpec`;
  }

  remove(id: number) {
    return `This action removes a #${id} panelesNoSpec`;
  }
}
