import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user/user.module';
import { UserServiceService } from './user/user-service/user-service.service';
import { join } from 'path';
import { DataSource } from 'typeorm';
import { User } from './user/user/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),

     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'techprimelab',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    TypeOrmModule.forFeature([
      User,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, UserServiceService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
