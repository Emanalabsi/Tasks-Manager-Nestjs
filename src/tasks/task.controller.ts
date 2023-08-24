import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/task-create.dto';
import { TasksService } from './task.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  retreiveTasks() {
    return this.tasksService.getTasks();
  }
  @Post('/create')
  addTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.addTask(createTaskDto);
  }
  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.tasksService.deleteTask(id);
  }
}
