import { createList, deleteList, patchList } from "@/service/list-service";

export const listMutations = {
  createList: (
    _: unknown,
    {
      input,
    }: {
      input: {
        id: string;
        name: string;
        startedYear: string;
        startedMonth: string;
        startedDay: string;
        startedHour: string;
        startedMinute: string;
        startedSecond: string;
        check: boolean;
      };
    }
  ) => createList(input),
  deleteList: (_: unknown, { id }: { id: string }) => deleteList(id),
  patchList: (
    _: unknown,
    {
      id,
      input,
    }: {
      id: string;
      input: {
        endedYear: string;
        endedMonth: string;
        endedDay: string;
        endedHour: string;
        endedMinute: string;
        endedSecond: string;
        check: boolean;
      };
    }
  ) => patchList(id, input),
};
