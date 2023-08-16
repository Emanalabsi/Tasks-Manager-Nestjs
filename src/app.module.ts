import { Module } from '@nestjs/common';
import { TasksController } from './tasks/task.controller';
import { AppService } from './tasks/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '123',
      username: 'postgres',
      entities: [],
      database: 'tasks_nestjs',
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [TasksController],
  providers: [AppService],
})
export class AppModule {}
