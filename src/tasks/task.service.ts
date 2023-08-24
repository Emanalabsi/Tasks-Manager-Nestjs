import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/task-create.dto';
import { UpdateTaskDto } from './dto/task-update.dto';
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

  async deleteTask(id: number) {
    const taskToDelete = await this.taskRepository.findOneBy({ id });
    if (!taskToDelete) {
      throw new NotFoundException('Task not found');
    }

    this.taskRepository.delete({ id });
    return 'Task deleted successfully';
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    const taskToUpdate = await this.taskRepository.findOneBy({ id });
    if (!taskToUpdate) {
      throw new NotFoundException('Task not found');
    }
    if (updateTaskDto.content) {
      taskToUpdate.content = updateTaskDto.content;
    }
    if (updateTaskDto.title) {
      taskToUpdate.title = updateTaskDto.title;
    }
    return this.taskRepository.save(taskToUpdate);
  }
}
