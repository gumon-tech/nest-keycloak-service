import { PartialType } from '@nestjs/mapped-types';
import { CreateGumonDto } from './create-gumon.dto';

export class UpdateGumonDto extends PartialType(CreateGumonDto) {}
