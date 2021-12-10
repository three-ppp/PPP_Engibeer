import { VFC } from "react";
import Image from "next/image";

type Props = {
  displayname: string;
  iconURL: string;
};

export const Avatar: VFC<Props> = (props) => {
  const { displayname, iconURL } = props;
  return (
    <div className="flex justify-center items-center text-sm">
      <div className="mr-3">
        <Image
          src={iconURL}
          alt="avatar"
          width="36px"
          height="36px"
          className="rounded-full"
        />
      </div>
      <h3>{displayname}</h3>
    </div>
  );
};
