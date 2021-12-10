import { BroadcastStatus } from "components/BroadcastStatus";
import { VFC } from "react";
import type { Status } from "types/types";

type Props = {
  title: string;
  status: Status;
};

export const BroadcastTitle: VFC<Props> = (props) => {
  const { title, status } = props;
  return (
    <div className="flex flex-col">
      <div className="mx-auto mb-4">
        <BroadcastStatus status={status} />
      </div>
      <h1 className="text-gray-900 text-3xl text-center">{title}</h1>
    </div>
  );
};
