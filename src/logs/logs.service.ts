import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { Log } from './entities/log.entity';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(Log)
    private logsRepository: Repository<Log>,
  ) {}

  create(createLogDto: CreateLogDto) {
    return this.logsRepository.save(createLogDto);
  }

  findAll() {
    return this.logsRepository.find();
  }

  findOne(id: number) {
    return this.logsRepository.findOneBy({ id });
  }

  findDevice(deviceAddress: string) {
    return this.logsRepository.findOneBy({ deviceAddress });
  }

  async remove(id: number): Promise<void> {
    await this.logsRepository.delete(id);
  }

  update(id: number, updateLogDto: UpdateLogDto) {
    return this.logsRepository.update(id, updateLogDto);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} log`;
  // }
}
