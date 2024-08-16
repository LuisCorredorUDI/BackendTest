import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { MensajesService } from './mensajes.service';
import { CreateMensajeDto } from './dto/create-mensaje.dto';
import { UpdateMensajeDto } from './dto/update-mensaje.dto';
import { FuncionesGlobalesService } from '../funciones-globales/funciones-globales.service'

@Controller('mensajes')
export class MensajesController {
  constructor(
    private readonly mensajesService: MensajesService,
    private readonly funcionesGlobalesService: FuncionesGlobalesService
  ) { }

  @Post()
  async create(@Body() createMensajeDto: CreateMensajeDto, @Res() respuesta) {
    const idMax = await this.funcionesGlobalesService.BuscarMaximoTabla('MENSAJE')+1;
    createMensajeDto.id=idMax;
    return this.mensajesService.create(createMensajeDto)
      .then(mensaje => { respuesta.status(HttpStatus.CREATED).json(mensaje) })
      .catch(() => { respuesta.status(HttpStatus.FORBIDDEN).json('Error en la Creacion') });
  }

  @Get()
  findAll(@Res() respuesta) {
    return this.mensajesService.findAll()
    .then( mensaje => { respuesta.status(HttpStatus.OK).json(mensaje)} )
    .catch( () => { respuesta.status(HttpStatus.FORBIDDEN).json('Error de busqueda en tabla')} );
  }

  @Get(':id')
  findOne(@Param('id') id: number, @Res() respuesta) {
    return this.mensajesService.findOne(+id)
    .then( mensaje => respuesta.status(HttpStatus.OK).json(mensaje))
    .catch( () => respuesta.status(HttpStatus.FORBIDDEN).json('Error en la actualizacion') );
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMensajeDto: UpdateMensajeDto, @Res() respuesta) {
    return this.mensajesService.update(+id, updateMensajeDto)
    .then( mensaje => respuesta.status(HttpStatus.OK).json(mensaje))
    .catch( () => respuesta.status(HttpStatus.FORBIDDEN).json('Error en la actualizacion') );
  }

  @Delete(':id')
  remove(@Param('id') id: number, @Res() respuesta) {
    return this.mensajesService.remove(+id)
    .then( mensaje => respuesta.status(HttpStatus.OK).json(mensaje))
    .catch( () => respuesta.status(HttpStatus.FORBIDDEN).json('Error en la Eliminacion') );
  }
}
