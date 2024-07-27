import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      datasources: {
        db: {
          url: "postgresql://neondb_owner:Mrk2cwC5EXvf@ep-lingering-silence-a12sfyo5.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}