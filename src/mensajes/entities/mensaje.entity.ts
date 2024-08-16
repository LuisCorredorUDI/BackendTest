import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('MENSAJE')
export class Mensaje {

    @PrimaryColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'NICK' })
    nick: string;

    @Column({ name: 'MENSAJE' })
    mensaje: string;
}
