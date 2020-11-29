import { buildSchema } from 'type-graphql'
import { GraphQLSchema } from 'graphql'
// import { BedResolver } from '../resolvers/Bed.js'
// import { GardenResolver } from '../resolvers/Garden.js'
import { HelloWorld } from '../resolvers/HelloWorld'
// import { SectionResolver } from '../resolvers/Section.js'
// import { UserResolver } from '../resolvers/User.js'

export async function createSchema(): Promise<GraphQLSchema> {
  return await buildSchema({
    resolvers: [
    //   BedResolver,
    //   GardenResolver,
      HelloWorld,
    //   SectionResolver,
    //   UserResolver,
    ],
  })
}