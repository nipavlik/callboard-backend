import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate'
import { PostEntity } from 'src/entity/post.entity'

import { CreatePostDto } from './dto/CreatePost.dto'
import { PostService } from './post.service'

@Controller()
export class PostController {
    
  constructor(
    private postService: PostService
  ) {}

  @Get('/posts')
  getAllPost(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<PostEntity>> {

    limit = limit > 100 ? 100 : limit

    return this.postService.getAllPost({
      page,
      limit
    })
  }

  @Get('/post/:id')
  getPostById(@Param('id') id: number): Promise<PostEntity> {
    return this.postService.getPostById(id)
  }

  @Post('/post')
  @UseInterceptors(FileInterceptor('image'))
  createPost(@Body() createPostDto: CreatePostDto, @UploadedFile() image: Express.Multer.File): Promise<PostEntity> {
    console.log(createPostDto)
    return this.postService.createPost(createPostDto, image.filename)
  }
  
}