import { PartialType } from '@nestjs/mapped-types';
import { CreatePaneleDto } from './create-panele.dto';

export class UpdatePaneleDto extends PartialType(CreatePaneleDto) {}
