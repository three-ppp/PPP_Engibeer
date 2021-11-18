import { VFC } from "react";
import BroadcastStatus from "./BroadcastStatus";
type Props = {
  title: string;
  status: "before" | "during" | "after";
  engibeerCount: number;
  date: string;
};

const BroadcastItem: VFC<Props> = (props) => {
  const { title, status, engibeerCount, date } = props;
  return (
    <div className="text-sm px-6 py-4 h-20 bg-white border-b cursor-pointer">
      <div className="flex justify-between mb-2">
        <h4 className="text-light_blue_600"> {title}</h4>
        <div className="">
          <BroadcastStatus status={status} />
        </div>
      </div>
      <div className="flex justify-between text-gray-500">
        <div>{date}</div>
        <div className="">エンジビア数{engibeerCount}</div>
      </div>
    </div>
  );
};

export default BroadcastItem;
