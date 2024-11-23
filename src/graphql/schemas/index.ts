import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { listTypeDefs } from "./list-schema";

export const typeDefs = mergeTypeDefs([listTypeDefs]);
