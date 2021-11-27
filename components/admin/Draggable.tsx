import React, { VFC } from "react";
import { useDraggable } from "@dnd-kit/core";

type Props = {
  children: React.ReactNode;
  id: string;
};

const Draggable: VFC<Props> = (props) => {
  const { children, id } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
};

export default Draggable;
