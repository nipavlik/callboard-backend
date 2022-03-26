import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { TypeOrmModule } from '@nestjs/typeorm'
import { diskStorage } from 'multer'
import { editFileName, imageFileFilter } from '../utils'
import { PostEntity } from '../entity/post.entity'

import { PostController } from './post.controller'
import { PostService } from './post.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    MulterModule.register({
      storage: diskStorage({
        destination: './upload',
        filename: editFileName
      }),
      fileFilter: imageFileFilter,
      limits: {
        fileSize: 1024 * 1024 * 5 // 5 mb
      }
    }),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}