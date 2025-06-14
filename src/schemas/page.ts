export interface IPage<I> {
  previousPage: number | null;
  nextPage: number | null;
  total: number;
  totalPages: number;
  items: I[];
}