import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';

@Entity()
export class ContactEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  phone: string;

  @Column('float', { array: true, nullable: true })
  location: number[];

  @Column({ type: 'varchar', nullable: true })
  photo: string;

  @ManyToOne(() => UserEntity, (user) => user.contactos, { onDelete: 'CASCADE' })
  user: UserEntity;
}
