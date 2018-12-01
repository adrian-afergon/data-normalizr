import {Normalized} from "./normalized";

export const normalize = (collection: any[], idName: string, mapperFn: (obj: any) => any): Normalized<any> =>
  collection.reduce(
    (sum, object: any) => ({
      ...sum,
      [object[idName]]: mapperFn(object),
    }),
    {},
  );
