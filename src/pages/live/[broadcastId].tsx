import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState, VFC } from "react";
import BroadcastTitle from "../../components/BroadcastTitle";
import HeyButton from "../../components/HeyButton";
import HeyUserItem from "../../components/HeyUserItem";

type LiveInfo = {
  id: string;
  title: string;
  status: "before" | "during" | "after";
  engibeerCount: string;
  date: string;
};

type HeyUser = {
  displayName: string;
  iconURL: string;
  heyCount: string;
};

const LivePage: VFC = () => {
  const [broadcastInfo, setBroadcastInfo] = useState<LiveInfo>();
  const [heyUserList, setHeyUserList] = useState<Array<HeyUser>>([]);
  const [heyCount, setHeyCount] = useState(0);

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

  const fetchHeyUser = useCallback(async () => {
    const res = await fetch("http://localhost:3001/heyUser");
    const json = await res.json();
    setHeyUserList(json);
  }, []);

  useEffect(() => {
    // クエリがセットされたことを検知
    if (router.asPath !== router.route) {
      const { broadcastId } = router.query;
      fetchBroadcastInfo(broadcastId);
    }
    fetchHeyUser();
  }, [router]);
  return (
    <>
      {broadcastInfo !== undefined ? (
        <div className="pt-10">
          <BroadcastTitle
            title={broadcastInfo.title}
            status={broadcastInfo.status}
          />
        </div>
      ) : null}

      <div className="absolute top-16 right-6">
        {heyUserList.map((item: HeyUser, index: number) => {
          return (
            <div key={item.iconURL}>
              <HeyUserItem
                displayname={item.displayName}
                iconURL={item.iconURL}
                heyCount={item.heyCount}
              />
            </div>
          );
        })}
      </div>

      <div className="mb-auto">
        <p className="text-3xl bg-white p-8 rounded-lg w-2/4 text-center mx-auto mt-8">
          次のエンジビアをお待ちください
        </p>
      </div>

      <div className="absolute left-2/4 transform -translate-x-1/2 top-2/3">
        <HeyButton incrementHey={setHeyCount} disabled={true} />
      </div>
    </>
  );
};

export default LivePage;
