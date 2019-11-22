declare interface User {
  id: number;

  __unicode__: string;
  name: string;
  short_name: string;
}

declare interface PaginatedResponseInterface<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
