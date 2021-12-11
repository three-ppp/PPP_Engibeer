import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState, VFC } from "react";
import { ArchiveIframe } from "components/ArchiveIframe";
import { BroadcastTitle } from "components/BroadcastTitle";
import type { BroadcastInfo } from "types/types";

const ArchivePage: VFC = () => {
  const [broadcastInfo, setBroadcastInfo] = useState<BroadcastInfo>();

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
    </div>
  );
};

export default ArchivePage;
