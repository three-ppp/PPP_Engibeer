import { VFC } from "react";

export const Loading: VFC = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400"></div>
      </div>
    </div>
  );
};
