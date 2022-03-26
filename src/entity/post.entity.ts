import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'post'
})
export class PostEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @Column()
  date: Date

  @Column()
  image: string
  
}