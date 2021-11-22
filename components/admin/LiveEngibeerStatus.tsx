import { VFC } from "react";
type Props = {
  status: "before" | "during" | "after";
};

const LiveEngibeerStatus: VFC<Props> = (props) => {
  const { status } = props;
  return (
    <div className=" bg-gray-300 text-gray-900 rounded-lg w-80 text-center h-14 flex items-center justify-center">
      <div>
        {status === "before"
          ? "フィーチャー前"
          : status === "during"
          ? "フィーチャー中"
          : "フィーチャー済み"}
      </div>
    </div>
  );
};
export default LiveEngibeerStatus;
