import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";

export const getLists = async () => {
  try {
    const result = await prisma.list.findMany();
    return result;
  } catch {
    throw new GraphQLError("Error fetching users");
  }
};

export const getList = async (id: string) => {
  try {
    const result = await prisma.list.findUnique({ where: { id } });
    return result;
  } catch {
    throw new GraphQLError("Cannot fetch an list with that id");
  }
};

export const createList = async (input: {
  cardId: string;
  name: string;
  startedYear: string;
  startedMonth: string;
  startedDay: string;
  startedHour: string;
  startedMinute: string;
  startedSecond: string;
  check: boolean;
}) => {
  try {
    const result = await prisma.list.create({ data: input });
    return result;
  } catch {
    throw new GraphQLError("Error creating list");
  }
};

export const deleteList = async (id: string) => {
  try {
    const result = await prisma.list.delete({ where: { id } });
    return result;
  } catch {
    throw new GraphQLError("Error deleting user");
  }
};

export const patchList = async (
  id: string,
  input: {
    endedYear: string;
    endedMonth: string;
    endedDay: string;
    endedHour: string;
    endedMinute: string;
    endedSecond: string;
    check: boolean;
  }
) => {
  try {
    const result = await prisma.list.update({ where: { id }, data: input });
    return result;
  } catch {
    throw new GraphQLError("Error patching user");
  }
};
