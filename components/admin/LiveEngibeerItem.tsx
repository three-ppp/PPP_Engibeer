import { VFC } from "react";
import Avatar from "../Avatar";

type Props = {
  title: string;
  displayname: string;
  iconURL: string;
};

const LiveEngibeerItem: VFC<Props> = (props) => {
  const { title, displayname, iconURL } = props;
  return (
    <div className="w-80 p-3  bg-white text-sm flex flex-col items-baseline rounded-lg">
      <h2 className="mb-4">{title}</h2>
      <Avatar displayname={displayname} iconURL={iconURL} />
    </div>
  );
};

export default LiveEngibeerItem;
