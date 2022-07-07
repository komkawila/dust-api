import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'double', default: 0 })
  pm1: number;

  @Column({ type: 'double', default: 0 })
  pm25: number;

  @Column({ type: 'double', default: 0 })
  pm10: number;

  @Column({ type: 'double', default: 0 })
  temperature: number;

  @Column({ type: 'varchar', default: null, length: 200 })
  deviceAddress: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updateAt: string;
}
