import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  number: string;

  @Column({ type: 'text', array: true, nullable: true })
  location: string[];

  @Column({ type: 'varchar', nullable: true })
  photo: string;

  @ManyToOne(() => UserEn, (user) => user.contactos, { onDelete: 'CASCADE' })
  user: User;
}
