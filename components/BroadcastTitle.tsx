import { VFC } from "react";
import BroadcastStatus from "./BroadcastStatus";

type Props = {
  title: string;
  status: "before" | "during" | "after";
};

const BroadcastTitle: VFC<Props> = (props) => {
  const { title, status } = props;
  return (
    <div className='flex flex-col'>
      <div className="mx-auto mb-4">
        <BroadcastStatus status={status} />
      </div>
      <h1 className="text-gray-900 text-3xl text-center">{title}</h1>
    </div>
  );
};

export default BroadcastTitle;
