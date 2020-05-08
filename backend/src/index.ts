import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/user_resolver';


async function runServer() {
  const connection = await createConnection();

  const schema = await buildSchema({
    resolvers: [UserResolver]
  });

  const server = new ApolloServer({ schema });
  await server.listen(8050);

  console.log('Server started at port ::8050');
}


runServer();
