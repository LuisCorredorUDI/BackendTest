import { Injectable } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje.dto';
import { UpdateMensajeDto } from './dto/update-mensaje.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MensajesService {

  constructor(
    @InjectRepository(Mensaje)
    private readonly mensajeRepository: Repository<Mensaje> 
  ){}

  async create(createMensajeDto: CreateMensajeDto): Promise<Mensaje> {
    const nuevo = new Mensaje;
    nuevo.id = createMensajeDto.id;
    nuevo.mensaje = createMensajeDto.mensaje;
    nuevo.nick = createMensajeDto.nick;
    return this.mensajeRepository.save(nuevo);
  }

  async findAll() {
    return await this.mensajeRepository.find();
  }

  async findOne(id: number) {
    return await this.mensajeRepository.findOne({where: { id },});
  }

  async update(id: number, updateMensajeDto: UpdateMensajeDto): Promise<Mensaje> {
    const actualizado = await this.mensajeRepository.findOne({where: { id },});
    actualizado.mensaje = updateMensajeDto.mensaje;
    actualizado.nick = updateMensajeDto.nick;
    return this.mensajeRepository.save(actualizado);
  }

  async remove(id: number): Promise<any> {
    return await this.mensajeRepository.delete(id);
  }
}
