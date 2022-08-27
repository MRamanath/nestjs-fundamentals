import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

Index(['type', 'name']);
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>; // https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
}