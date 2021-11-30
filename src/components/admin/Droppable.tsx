import React, { VFC } from "react";
import { useDroppable } from "@dnd-kit/core";

type Props = {
  children: React.ReactNode;
  id: string;
};

const Droppable: VFC<Props> = (props) => {
  const { children, id } = props;
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return <div ref={setNodeRef}>{children}</div>;
};

export default Droppable;
