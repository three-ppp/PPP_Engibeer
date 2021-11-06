import { VFC } from "react";
import Image from "next/image";

type Props = {
  displayname: string;
  iconURL: string;
};

const Avatar: VFC<Props> = (props) => {
  const { displayname, iconURL } = props;
  return (
    <div className="flex justify-center items-center">
      <div className="mr-3">
        <Image
          src={iconURL}
          alt="avatar"
          width="36px"
          height="36px"
          className="rounded-full"
        />
      </div>
      <h3 className="">{displayname}</h3>
    </div>
  );
};

export default Avatar;
