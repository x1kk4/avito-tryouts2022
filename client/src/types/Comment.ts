export type Comment = {
  by?: string;
  deleted?: boolean;
  dead?: boolean;
  id: number;
  kids?: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
};
