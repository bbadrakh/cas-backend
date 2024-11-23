import { listQueries } from "./queries/list-queries";
import { listMutations } from "./mutations/list-mutation";

export const resolvers = {
  Query: {
    ...listQueries,
  },
  Mutation: {
    ...listMutations,
  },
};
