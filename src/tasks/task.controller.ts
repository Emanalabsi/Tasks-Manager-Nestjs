import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/task-create.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  retreiveTasks(): string {
    return 'hello from the controllers';
  }
  @Post()
  addTask(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    return 'this method adds a new task';
  }
}
