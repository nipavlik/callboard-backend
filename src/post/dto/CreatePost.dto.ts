import { IsNotEmpty, MaxLength } from 'class-validator'

export class CreatePostDto {

  @MaxLength(255)
  @IsNotEmpty()
  title: string

  @MaxLength(2048)
  @IsNotEmpty()
  content: string

}