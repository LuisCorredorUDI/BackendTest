import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesModule } from './mensajes/mensajes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensaje } from './mensajes/entities/mensaje.entity';
import { MensajesController } from './mensajes/mensajes.controller';
import { MensajesService } from './mensajes/mensajes.service';
import { FuncionesGlobalesModule } from './funciones-globales/funciones-globales.module';
import { FuncionesGlobalesController } from './funciones-globales/funciones-globales.controller';
import { FuncionesGlobalesService } from './funciones-globales/funciones-globales.service';
import { FuncionesGlobale } from './funciones-globales/entities/funciones-globale.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',             // Dirección del servidor Oracle
      port: 1521,                    // Puerto por defecto de Oracle
      username: 'DB_TEST_LISTAS',     // Usuario de la base de datos
      password: 'admin123',     // Contraseña del usuario
      sid: 'xe',               // SID de la base de datos Oracle (por ejemplo, ORCL)
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entidades
      synchronize: false,             // No recomendado en producción, genera automáticamente las tablas
    }),
    TypeOrmModule.forFeature([Mensaje]),
    TypeOrmModule.forFeature([FuncionesGlobale]),
  ],
  controllers: [AppController, MensajesController, FuncionesGlobalesController],
  providers: [AppService, MensajesService, FuncionesGlobalesService],
})
export class AppModule { }
