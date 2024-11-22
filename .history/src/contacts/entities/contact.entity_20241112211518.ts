import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

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

  // Relación muchos-a-uno con User
  @ManyToOne(() => User, (user) => user.contactos, { onDelete: 'CASCADE' })
  user: User;
}
