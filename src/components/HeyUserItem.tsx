import { Avatar } from "components/Avatar";
import { VFC } from "react";

type Props = {
  displayname: string;
  iconURL: string;
  heyCount: string;
};

export const HeyUserItem: VFC<Props> = (props) => {
  const { displayname, iconURL, heyCount } = props;
  return (
    <div className="flex items-center justify-between h-16 w-64  border-b">
      <Avatar displayname={displayname} iconURL={iconURL} />
      <div className=" text-gray-700 bg-white border rounded-xl px-2.5 py-px text-sm">
        {heyCount}へぇ
      </div>
    </div>
  );
};
