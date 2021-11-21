import { VFC } from "react";
type Props = {
  status: "before" | "during" | "after";
};

const BroadcastStatus: VFC<Props> = (props) => {
  const { status } = props;
  if (status === "before") {
    return (
      <div className="bg-orange py-0.5 px-2.5 rounded-xl text-sm text-orange_800 text-center">
        放送前・エンジビア募集中
      </div>
    );
  } else if (status === "during") {
    return (
      <div className="bg-green-100  py-0.5 px-2.5 rounded-xl text-sm text-green-800 text-center">
        放送中
      </div>
    );
  } else {
    return (
      <div className="bg-gray-200 py-0.5 px-2.5 rounded-xl text-sm text-gray-900 text-center">
        放送済み
      </div>
    );
  }
};
export default BroadcastStatus;
