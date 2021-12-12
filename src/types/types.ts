import { User } from "@firebase/auth";

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

export type CurrentUser = User | null | undefined;

export type AuthContext = {
  currentUser: CurrentUser;
};
