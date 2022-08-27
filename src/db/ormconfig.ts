import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Event, Coffee, Flavor],
  migrationsTableName: 'migrations',
  migrations: ['src/db/migrations/*.ts'],
});

export default dataSource;
