import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ContactEntity } from '../../contacts/entities/contact.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  username: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  company: string;

  @OneToMany(() => ContactEnt, (contacto) => contacto.user, { cascade: true })
  contactos: Contact[];
}
