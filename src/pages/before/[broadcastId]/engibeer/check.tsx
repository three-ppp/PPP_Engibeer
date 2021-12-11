import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState, VFC } from "react";
import { BroadcastTitle } from "components/BroadcastTitle";
import { Button }  from "components/Button";

type BroadcastInfo = {
  id: string;
  title: string;
  status: "before" | "during" | "after";
  engibeerCount: string;
  date: string;
};

const EngiberrAddPage: VFC = () => {
  const [broadcastInfo, setBroadcastInfo] = useState<BroadcastInfo>();
  const [engibeer, setEngibeer] = useState("");

  const router = useRouter();

  const fetchLiveInfo = useCallback(
    async (broadcastId: string | string[] | undefined) => {
      const res = await fetch(
        `http://localhost:3001/broadcasts/${broadcastId}`
      );
      const json = await res.json();
      setBroadcastInfo(json);
    },
    []
  );

  const editEngibeer = useCallback(() => {
    // エンジビアを編集する処理を書く
    console.log(engibeer);
  }, [engibeer]);
  
  const removeEngibeer = useCallback(() => {
    // エンジビアを削除する処理を書く
    console.log(engibeer);
  }, [engibeer]);

  useEffect(() => {
    // クエリがセットされたことを検知
    if (router.asPath !== router.route) {
      const { broadcastId } = router.query;
      fetchLiveInfo(broadcastId);
    }
  }, [router]);

  return (
    <div>
			<div className="flex flex-col">
				{broadcastInfo !== undefined ? (
					<div className="pt-10 mb-8">
						<BroadcastTitle
							title={broadcastInfo.title}
							status={broadcastInfo.status}
						/>
					</div>
				) : null}


				<div className="mb-auto">
					<div className="text-3xl bg-white p-8 rounded-lg w-2/5 text-center mx-auto mt-8">
						<p>HTMLにはポータルという便利な要素がある</p>
            {/* 仮として */}
            <div className="bg-blue-500 text-left w-20 h-8 mt-6">
              <img src="image" />
            </div>
					</div>
				</div>

				<div className="flex flex-row justify-center items-center mt-8">
          <div className="mr-8">
            <Button text="編集する" onClick={editEngibeer} />
          </div>
					<Button text="削除する" buttonType="second" onClick={removeEngibeer} />
				</div>
      

    	</div>
		</div>

  );
};

export default EngiberrAddPage;
