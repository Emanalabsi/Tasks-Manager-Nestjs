import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/task-create.dto';
CreateTaskDto;
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  getTasks() {
    return this.taskRepository.find();
  }

  addTask(createTaskDto: CreateTaskDto) {
    const newTask = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(newTask);
  }

  deleteTask(id: number) {
    const taskToDelete = this.taskRepository.findOneBy({ id });
    if (!taskToDelete) {
      throw new NotFoundException('Task not found');
    }

    this.taskRepository.delete({ id });
    return 'Task deleted successfully';
  }
}
