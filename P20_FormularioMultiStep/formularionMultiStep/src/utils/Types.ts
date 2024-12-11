export enum Review {
  Unsatisfied = "UNSATISFIED",
  Normal = "NORMAL",
  Satisfied = "SATISFIED",
  VerySatisfied = "VERY SATISFIED",
}

export type User = {
  name: string;
  email: string;
  review: Review | null;
  comment: string;
};
