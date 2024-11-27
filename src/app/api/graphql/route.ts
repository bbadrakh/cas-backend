import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/graphql/schemas";
import { resolvers } from "@/graphql/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== "production",
});

const apolloHandler = startServerAndCreateNextHandler(server);

export async function GET(request: Request) {
  return apolloHandler(request);
}

export async function POST(request: Request) {
  return apolloHandler(request);
}
