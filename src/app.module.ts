import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import * as ormconfig from './ormconfig'

import { PostModule } from './post/post.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    PostModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
