import { PartialType } from '@nestjs/mapped-types';
import { CreatePanelesNoSpecDto } from './create-paneles--no-spec.dto';

export class UpdatePanelesNoSpecDto extends PartialType(CreatePanelesNoSpecDto) {}
