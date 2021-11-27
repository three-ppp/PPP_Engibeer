import { useCallback, useEffect, useState, VFC } from "react";
import BroadcastItem from "../components/BroadcastItem";

type Broadcast = {
  id: string;
  title: string;
  status: "before" | "during" | "after";
  engibeerCount: number;
  date: string;
};
const HomePage: VFC = () => {
  const [broadcastList, setBroadcastList] = useState<Array<Broadcast>>([]);

  const fetchBroadcast = useCallback(async () => {
    const res = await fetch("http://localhost:3001/broadcasts");
    const json = await res.json();
    setBroadcastList(json);
  }, []);

  useEffect(() => {
    fetchBroadcast();
  }, []);

  return (
    <div className="w-3/5 mx-auto">
      <h1 className="py-8 text-3xl ">放送一覧</h1>
      <div className="border">
        {broadcastList.map((item, index) => {
          return (
            <div key={index} className="first:border">
              <BroadcastItem
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
  );
};

export default HomePage;
