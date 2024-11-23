import { getLists, getList } from "@/service/list-service";

export const listQueries = {
  getLists: () => getLists(),
  getList: (_: unknown, { id }: { id: string }) => getList(id),
};
