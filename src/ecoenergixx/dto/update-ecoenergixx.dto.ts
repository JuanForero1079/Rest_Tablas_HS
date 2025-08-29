import { PartialType } from '@nestjs/mapped-types';
import { CreateEcoenergixxDto } from './create-ecoenergixx.dto';

export class UpdateEcoenergixxDto extends PartialType(CreateEcoenergixxDto) {}
