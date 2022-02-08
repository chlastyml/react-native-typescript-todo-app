export type Task = {
  id: string;
  finished: boolean;
  description: string;
  toggle: () => void;
};
