import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate'

import { PostEntity } from '../entity/post.entity'
import { CreatePostDto } from './dto/CreatePost.dto'

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(PostEntity) 
    private postRepository: Repository<PostEntity>
  ) {}

  getAllPost(options: IPaginationOptions) {
    return paginate<PostEntity>(this.postRepository, options)
  }

  async getPostById(id: number) {
    let post: PostEntity = await this.postRepository.findOne(id)

    if(!post) throw new NotFoundException()

    return post
  }

  createPost(createPostDto: CreatePostDto, fileName: string) {
    
    let post: PostEntity = new PostEntity()

    post.title = createPostDto.title
    post.content = createPostDto.content
    post.date = new Date()
    post.image = fileName

    return this.postRepository.save(post)
  }

}