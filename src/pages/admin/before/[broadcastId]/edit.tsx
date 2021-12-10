import { Button } from "components/Button";
import { PrimaryInput } from "components/PrimaryInput";
import { useRouter } from "next/dist/client/router";
import { ChangeEvent, useCallback, useEffect, useState, VFC } from "react";

const BroadcastEditPage: VFC = () => {
  const [broadcastTitle, setBroadcastTitle] = useState("");
  const [broadcastDate, setBroadcastDate] = useState("");
  const [broadcastId, setBroadcastId] = useState<string | string[] | undefined>(
    undefined
  );

  const router = useRouter();

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setBroadcastTitle(e.target.value);
  };
  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setBroadcastTitle(e.target.value);
  };

  const saveBroadcast = useCallback(() => {
    // 放送の情報を更新する処理を書く
    console.log("save");
  }, []);

  const pushLivePage = useCallback(() => {
    router.push(`/admin/live/${broadcastId}`);
  }, []);
  
  useEffect(() => {
    // クエリがセットされたことを検知
    if (router.asPath !== router.route) {
      const { broadcastId } = router.query;
      setBroadcastId(broadcastId);
    }
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="flex flex-col items-baseline w-6/12">
        <h1 className="mb-8 text-3xl">放送を編集</h1>
        <div className="w-full mb-8">
          <PrimaryInput
            value={broadcastTitle}
            onChange={onChangeTitle}
            placeholder="タイトルを入力する"
          />
        </div>
        <div className="w-full mb-8">
          <PrimaryInput
            value={broadcastDate}
            onChange={onChangeDate}
            placeholder="2021/09/03"
          />
        </div>
      </div>

      <div className="flex">
        <div className="mr-8">
          <Button text="保存する" onClick={saveBroadcast} />
        </div>
        <Button
          text="キャンセルする"
          buttonType="second"
          onClick={pushLivePage}
        />
      </div>
    </div>
  );
};

export default BroadcastEditPage;
