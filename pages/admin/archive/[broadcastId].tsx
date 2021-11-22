import { useRouter } from "next/dist/client/router";
import { ChangeEvent, useCallback, useEffect, useState, VFC } from "react";
import ArchiveIframe from "../../../components/ArchiveIframe";
import BroadcastTitle from "../../../components/BroadcastTitle";
import Button from "../../../components/Button";
import PrimaryInput from "../../../components/PrimaryInput";

type BroadcastInfo = {
  id: string;
  title: string;
  status: "before" | "during" | "after";
  engibeerCount: string;
  date: string;
};

const adminArchivePage: VFC = () => {
  const [broadcastInfo, setBroadcastInfo] = useState<BroadcastInfo>();
  const [archiveURL, setArchiveURL] = useState("");

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

  const onChangeArchiveURL = (e: ChangeEvent<HTMLInputElement>) => {
    setArchiveURL(e.target.value);
  };

  const saveArchiveURL = useCallback(() => {
    // アーカイブURLを保存する処理を書く
    console.log("save!!");
  }, []);

  useEffect(() => {
    // クエリがセットされたことを検知
    if (router.asPath !== router.route) {
      const { broadcastId } = router.query;
      fetchBroadcastInfo(broadcastId);
    }
  }, [router]);
  return (
    <div className="flex flex-col justify-center items-center">
      {broadcastInfo !== undefined ? (
        <div className="pt-10 mb-8">
          <BroadcastTitle
            title={broadcastInfo.title}
            status={broadcastInfo.status}
          />
        </div>
      ) : null}

      <div>
        {/* アーカイブのURLを取得してArchivveIframeコンポーネントのarchiveURLに渡す必要がある */}
        <ArchiveIframe archiveURL="https://www.youtube.com/embed/JkMWZeGnoD0" />
      </div>

      <div className="my-4 w-6/12">
        <PrimaryInput
          value={archiveURL}
          onChange={onChangeArchiveURL}
          placeholder="URLを入力する"
        />
      </div>

      <Button text="保存する" onClick={saveArchiveURL} />
    </div>
  );
};

export default adminArchivePage;
