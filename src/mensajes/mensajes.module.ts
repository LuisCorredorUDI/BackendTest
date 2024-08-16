import { Module } from '@nestjs/common';
import { MensajesService } from './mensajes.service';
import { MensajesController } from './mensajes.controller';
import { FuncionesGlobalesModule } from 'src/funciones-globales/funciones-globales.module';

@Module({
  imports: [FuncionesGlobalesModule],
  controllers: [MensajesController],
  providers: [MensajesService],
})
export class MensajesModule {}
