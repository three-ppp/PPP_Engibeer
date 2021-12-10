export type Status = "before" | "during" | "after";

export type Engibeer = {
  id: string;
  title: string;
  userName: string;
  iconURL: string;
  status: string;
};

export type BroadcastInfo = {
  id: string;
  title: string;
  status: Status;
  engibeerCount: number;
  date: string;
};
