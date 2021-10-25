import { VFC } from "react";

export const Header: VFC = () => {
  return (
    <div className="relative w-full h-12 bg-gray-400">
			<div className="flex flex-row items-center">
				<img src="Icon Logo.png" />
				<img src="エンジビアの泉.png" />
			</div>
    </div>
  );
};
