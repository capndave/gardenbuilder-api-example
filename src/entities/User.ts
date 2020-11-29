const { Field, ID, ObjectType, Root } = require('type-graphql')
const {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
//   OneToMany,
} = require('typeorm')
// const { Garden } = require('./Garden.js')

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({ unique: true })
  email!: string

  // No Field decorator b/c we don't want this to be queryable
  @Column()
  password!: string

  @Field()
  @Column()
  firstName: string

  @Field()
  @Column()
  lastName: string

  @Field()
  name(@Root() parent: User): string {
    return parent.firstName + ' ' + parent.lastName
  }

  @Column({ default: false })
  isAdministrator: boolean

//   @OneToMany(() => Garden, (garden) => garden.owner)
//   gardens: Garden[]

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  static findById: any
}