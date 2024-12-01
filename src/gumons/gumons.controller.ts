import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GumonsService } from './gumons.service';
import { CreateGumonDto } from './dto/create-gumon.dto';
import { UpdateGumonDto } from './dto/update-gumon.dto';

@Controller('gumons')
export class GumonsController {
  constructor(private readonly gumonsService: GumonsService) {}

  @Post()
  create(@Body() createGumonDto: CreateGumonDto) {
    return this.gumonsService.create(createGumonDto);
  }

  @Get()
  findAll() {
    return this.gumonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gumonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGumonDto: UpdateGumonDto) {
    return this.gumonsService.update(+id, updateGumonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gumonsService.remove(+id);
  }
}
