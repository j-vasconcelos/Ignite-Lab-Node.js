import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prima: PrismaService) {}

  @Get()
  list() {
    return this.prima.notifications.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody){
    const { recipientId, content, category } = body;

    await this.prima.notifications.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      }
    });
  }
}
