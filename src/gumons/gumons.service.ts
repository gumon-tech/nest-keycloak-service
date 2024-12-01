import { Injectable } from '@nestjs/common';
import { CreateGumonDto } from './dto/create-gumon.dto';
import { UpdateGumonDto } from './dto/update-gumon.dto';

@Injectable()
export class GumonsService {
  create(createGumonDto: CreateGumonDto) {
    return 'This action adds a new gumon';
  }

  findAll() {
    return `This action returns all gumons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gumon`;
  }

  update(id: number, updateGumonDto: UpdateGumonDto) {
    return `This action updates a #${id} gumon`;
  }

  remove(id: number) {
    return `This action removes a #${id} gumon`;
  }
}
