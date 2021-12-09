import { Draggable } from "components/admin/Draggable";
import { Droppable } from "components/admin/Droppable";
import { LiveEngibeerItem } from "components/admin/LiveEngibeerItem";
import { LiveEngibeerStatus } from "components/admin/LiveEngibeerStatus";
import { VFC } from "react";
import type { Engibeer, Status } from "types/types";

type Props = {
  id: string;
  status: Status;
  LiveEngiberrList: Engibeer[];
};

export const LiveEngibeerList: VFC<Props> = (props) => {
  const { id, status, LiveEngiberrList } = props;
  return (
    <Droppable id={id} key={id}>
      <div className="w-80 mr-8" key={id}>
        <div className="mb-4">
          <LiveEngibeerStatus status={status} />
        </div>
        {LiveEngiberrList.map((item) => {
          return (
            <Draggable key={item.id} id={String(item.id)}>
              <div className="mb-4">
                <LiveEngibeerItem
                  title={item.title}
                  displayname={item.userName}
                  iconURL={item.iconURL}
                />
              </div>
            </Draggable>
          );
        })}
      </div>
    </Droppable>
  );
};
