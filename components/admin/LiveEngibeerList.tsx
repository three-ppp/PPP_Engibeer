import { VFC } from "react";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import LiveEngibeerItem from "./LiveEngibeerItem";
import LiveEngibeerStatus from "./LiveEngibeerStatus";

type Engibeer = {
  id: string;
  title: string;
  userName: string;
  iconURL: string;
  status: string;
};
type Props = {
  id: string;
  status: "before" | "during" | "after";
  LiveEngiberrList: Array<Engibeer>;
};

const LiveEngibeerList: VFC<Props> = (props) => {
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

export default LiveEngibeerList;
