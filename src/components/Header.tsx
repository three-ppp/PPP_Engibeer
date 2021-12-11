import { VFC } from "react";
import Image from "next/image";

type Props = {
  iconURL: string;
};

export const Header: VFC<Props> = (props) => {
  const { iconURL } = props;
  return (
    <div className="flex items-center bg-white w-screen h-16 justify-between">
      <div className="ml-8 flex">
        <div className="mr-2">
          <Image src="/logo.png" alt="Logo" width="30px" height="30px" />
        </div>
        <div>
          <Image
            src="/engibeer.png"
            alt="engibeer"
            width="126px"
            height="32px"
          />
        </div>
      </div>

      <div className="mr-8">
        <Image
          src={iconURL}
          alt="avatar"
          width="32px"
          height="32px"
          className="rounded-full"
        />
      </div>
    </div>
  );
};
