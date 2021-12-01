import { AdminBroadcastItem } from "components/admin/AdminBroadcastItem";
import { Button } from "components/Button";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState, VFC } from "react";
import type { BroadcastInfo } from "types/types";


const AdminHomePage: VFC = () => {
  const [broadcastList, setBroadcastList] = useState<BroadcastInfo[]>([]);
  const router = useRouter();

  const fetchBroadcast = useCallback(async () => {
    const res = await fetch("http://localhost:3001/broadcasts");
    const json = await res.json();
    setBroadcastList(json);
  }, []);

  const pushAddPage = useCallback(() => {
    router.push("/admin/broadcast/add");
  }, []);

  useEffect(() => {
    fetchBroadcast();
  }, []);

  return (
    <div className="w-3/5 mx-auto flex flex-col items-center justify-center">
      <div className="mb-8 w-full">
        <h1 className="py-8 text-3xl">放送一覧</h1>
        <div className="border">
          {broadcastList.map((item) => {
            return (
              <div key={item.id} className="first:border">
                <AdminBroadcastItem
                  broadcastId={item.id}
                  title={item.title}
                  date={item.date}
                  status={item.status}
                  engibeerCount={item.engibeerCount}
                />
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={(e) => console.log(e)}></button>

      <Button text="放送を作成する" onClick={pushAddPage} />
    </div>
  );
};

export default AdminHomePage;
