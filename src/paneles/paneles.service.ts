import { Injectable } from '@nestjs/common';
import { CreatePaneleDto } from './dto/create-panele.dto';
import { UpdatePaneleDto } from './dto/update-panele.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PanelesService {
  create(createPaneleDto: CreatePaneleDto) {
    return 'This action adds a new panele';
  }

  constructor(
      private servicio: PrismaService
    ){}

  findAll() {
    return this.servicio.paneles.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} panele`;
  }

  update(id: number, updatePaneleDto: UpdatePaneleDto) {
    return `This action updates a #${id} panele`;
  }

  remove(id: number) {
    return `This action removes a #${id} panele`;
  }
}
