import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsModule } from './logs/logs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Log } from './logs/entities/log.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'dns.pkbit.co',
      port: 3306,
      username: 'komkawila',
      password: 'Kkomprwm20_1111',
      database: 'dustsystem_db',
      entities: [Log],
      synchronize: true,
    }),
    LogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
