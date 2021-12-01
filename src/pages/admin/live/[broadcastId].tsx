import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { LiveEngibeerList } from "components/admin/LiveEngibeerList";
import { BroadcastTitle } from "components/BroadcastTitle";
import { Button } from "components/Button";
import { Header } from "components/Header";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState } from "react";
import type { BroadcastInfo, Engibeer, Status } from "types/types";

const AdminLivePage = () => {
  const containers: Status[] = ["before", "during", "after"];
  const [beforeList, setBeforeList] = useState<Engibeer[]>([]);
  const [duringList, setDuringList] = useState<Engibeer[]>([]);
  const [afterList, setAfterList] = useState<Engibeer[]>([]);
  const [broadcastInfo, setBroadcastInfo] = useState<BroadcastInfo>();
  const [isLive, setIsLive] = useState(false);

  const router = useRouter();

  const fetchBroadcastInfo = useCallback(
    async (broadcastId: string | string[] | undefined) => {
      const res = await fetch(
        `http://localhost:3001/broadcasts/${broadcastId}`
      );
      const json = await res.json();
      setBroadcastInfo(json);
    },
    []
  );

  const liveStart = useCallback(() => {
    setIsLive((prev) => !prev);
    // 放送のステータスをduringに変更する処理を書く
  }, [setIsLive]);

  const liveEnd = useCallback(() => {
    setIsLive((prev) => !prev);
    // 放送のステータスをafterに変更する処理を書く
  }, [setIsLive]);

  const pushEditPage = useCallback(() => {
    router.push(`/admin/broadcast/${2}/edit`);
  }, []);

  console.log("レンダリング！！");

  const fetchEngibeerList = useCallback(async () => {
    const res = await fetch("http://localhost:3001/engibeers");
    const json = await res.json();
    setBeforeList(json);
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (over && over.id === "before") {
      setBeforeList((prevList) => {
        if (duringList.filter((item) => item.id === active.id).length) {
          // duringからbeforeへ移動
          const changeEngibeer = duringList.filter(
            (item) => item.id === active.id
          );
          return [...prevList, ...changeEngibeer];
        } else if (afterList.filter((item) => item.id === active.id).length) {
          // afterからbeforeへ移動
          const changeEngibeer = afterList.filter(
            (item) => item.id === active.id
          );
          return [...prevList, ...changeEngibeer];
        } else {
          return prevList;
        }
      });
      setDuringList((prevList) => {
        return prevList.filter((item) => item.id !== active.id);
      });
      setAfterList((prevList) => {
        return prevList.filter((item) => item.id !== active.id);
      });
    } else if (over && over.id === "during") {
      if (duringList.length) {
        return;
      }
      setDuringList((prevList) => {
        if (beforeList.filter((item) => item.id === active.id).length) {
          // beforeからduringへ移動したとき
          const changeEngibeer = beforeList.filter(
            (item) => item.id === active.id
          );
          return [...prevList, ...changeEngibeer];
        } else if (afterList.filter((item) => item.id === active.id).length) {
          // afterからduringへ移動したとき
          const changeEngibeer = afterList.filter(
            (item) => item.id === active.id
          );
          return [...prevList, ...changeEngibeer];
        } else {
          return prevList;
        }
      });
      setBeforeList((prevList) => {
        return prevList.filter((item) => item.id !== active.id);
      });
      setAfterList((prevList) => {
        return prevList.filter((item) => item.id !== active.id);
      });
    } else if (over && over.id === "after") {
      setAfterList((prevList) => {
        if (beforeList.filter((item) => item.id === active.id).length) {
          // beforeからafterへ移動したとき
          const changeEngibeer = beforeList.filter(
            (item) => item.id === active.id
          );
          return [...prevList, ...changeEngibeer];
        } else if (duringList.filter((item) => item.id === active.id).length) {
          // duringからafterへ移動したとき
          const changeEngibeer = duringList.filter(
            (item) => item.id === active.id
          );
          return [...prevList, ...changeEngibeer];
        } else {
          return prevList;
        }
      });
      setBeforeList((prevList) => {
        return prevList.filter((item) => item.id !== active.id);
      });
      setDuringList((prevList) => {
        return prevList.filter((item) => item.id !== active.id);
      });
    }
  };

  useEffect(() => {
    if (router.asPath !== router.route) {
      const { broadcastId } = router.query;
      fetchBroadcastInfo(broadcastId);
    }
    fetchEngibeerList();
  }, [router]);

  return (
    <div className="flex items-center justify-center flex-col">
      <Header iconURL="https://source.unsplash.com/random" />
      <div className="relative flex justify-center items-center w-full">
        {broadcastInfo !== undefined ? (
          <div className="pt-10 mb-16">
            <BroadcastTitle
              title={broadcastInfo.title}
              status={broadcastInfo.status}
            />
          </div>
        ) : null}

        <div className="absolute right-56">
          {isLive ? (
            <Button
              text="放送を終了する"
              buttonType="second"
              onClick={liveEnd}
            />
          ) : (
            <div className="flex">
              <div className="mr-8">
                <Button text="放送を開始する" onClick={liveStart} />
              </div>
              <Button
                text="編集する"
                buttonType="second"
                onClick={pushEditPage}
              />
            </div>
          )}
        </div>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex">
          {containers.map((status) => {
            if (status === "before") {
              return (
                <LiveEngibeerList
                  LiveEngiberrList={beforeList}
                  id={status}
                  key={status}
                  status="before"
                />
              );
            } else if (status === "during") {
              return (
                <LiveEngibeerList
                  LiveEngiberrList={duringList}
                  id={status}
                  key={status}
                  status="during"
                />
              );
            } else {
              return (
                <LiveEngibeerList
                  LiveEngiberrList={afterList}
                  id={status}
                  key={status}
                  status="after"
                />
              );
            }
          })}
        </div>
      </DndContext>
    </div>
  );
};

export default AdminLivePage;
