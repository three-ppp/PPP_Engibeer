import { useRouter } from "next/dist/client/router";
import { ChangeEvent, useCallback, useState, VFC } from "react";
import Button from "../../../components/Button";
import PrimaryInput from "../../../components/PrimaryInput";

const BroadcastAddPage: VFC = () => {
  const [broadcastTitle, setBroadcastTitle] = useState("");
  const [broadcastDate, setBroadcastDate] = useState("");
  const router = useRouter();

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setBroadcastTitle(e.target.value);
  }, []);

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setBroadcastDate(e.target.value);
  };

  const addBroadcast = useCallback(() => {
    // 放送を投稿する処理を書く
    console.log("add");
  }, []);

  const pushHomePage = useCallback(() => {
    router.push("/admin/home");
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="flex flex-col items-baseline w-6/12">
        <h1 className="mb-8 text-3xl">放送を作成</h1>
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
          <Button text="保存する" onClick={addBroadcast} />
        </div>
        <Button
          text="キャンセルする"
          buttonType="second"
          onClick={pushHomePage}
        />
      </div>
    </div>
  );
};

export default BroadcastAddPage;
