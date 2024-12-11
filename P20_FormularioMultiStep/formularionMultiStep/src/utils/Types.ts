export enum Review {
  Unsatisfied = "INSATISFEITO",
  Normal = "NORMAL",
  Satisfied = "SATISFEITO",
  VerySatisfied = "MUTO_SATISFEITO",
}

export type User = {
  name: string;
  email: string;
  review: Review | null;
  comment: string;
};
