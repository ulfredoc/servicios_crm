import { Column,  Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'personas'})
export class Person {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    primerNombre: string;
  
    @Column({ nullable: true })
    segundoNombre: string;
  
    @Column()
    primerApellido: string;
  
    @Column({ nullable: true })
    segundoApellido: string;
  
    @Column({ nullable: true })
    telefono: number;
  
    @Column({ nullable: true })
    foto: string;
  
   /* @OneToMany(() => Direccion, (direccion) => direccion.persona, {
      cascade: ['insert', 'update'],
    })*/
//    direcciones: Direccion[];
  
    //@OneToOne(() => Cliente, (cliente) => cliente.persona, { cascade: true })
    //cliente: Cliente;
  
    //@DeleteDateColumn({ select: false })
    deletedAt: Date;
}

