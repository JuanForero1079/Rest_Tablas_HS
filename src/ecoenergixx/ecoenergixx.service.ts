import { Injectable } from '@nestjs/common';
import { CreateEcoenergixxDto } from './dto/create-ecoenergixx.dto';
import { UpdateEcoenergixxDto } from './dto/update-ecoenergixx.dto';

@Injectable()
export class EcoenergixxService {
  create(createEcoenergixxDto: CreateEcoenergixxDto) {
    return 'This action adds a new ecoenergixx';
  }

  findAll() {
    return `This action returns all ecoenergixx`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ecoenergixx`;
  }

  update(id: number, updateEcoenergixxDto: UpdateEcoenergixxDto) {
    return `This action updates a #${id} ecoenergixx`;
  }

  remove(id: number) {
    return `This action removes a #${id} ecoenergixx`;
  }
}
