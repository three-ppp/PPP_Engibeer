import { Avatar } from "components/Avatar";
import { VFC } from "react";

type Props = {
  title: string;
  displayname: string;
  iconURL: string;
  totalHeyCount?: number;
  engibeerNumber?: number;
};

const DisplayBoardEngibeer: VFC<Props> = (props) => {
  const { title, displayname, iconURL, totalHeyCount, engibeerNumber } = props;

  return (
    <>
      {totalHeyCount && engibeerNumber ? (
        //desktop13の時は以下を返す
        <ul className="w-[704px] h-[304px] p-8 bg-white rounded-lg">
          <li className="font-bold text-2xl leading-8 text-light_blue_600 self-stretch mb-6 flex justify-center">
            エンジビア{engibeerNumber}
          </li>
          <li className="w-[640px] h-[80px] text-4xl leading-10 font-medium text-left">
            {title}
          </li>
          <li>
            <ul className="flex justify-between items-end pt-6">
              <li className="flex items-center">
                <Avatar displayname={displayname} iconURL={iconURL} />
              </li>
              {/* //HeyButtonの押された数が集計されてDisplayHey(仮)コンポーネントに入ってくる。集計された数は上限100まで */}
              <li className="rounded-lg bg-yellow text-light_blue_600 w-[168px] h-[80px] flex justify-center items-center font-extrabold">
                <p className="text-4xl leading-10 font-extrabold">
                  {totalHeyCount}
                </p>
                <small className="text-2xl leading-8 font-extrabold pt-2">
                  へえ
                </small>
              </li>
            </ul>
          </li>
        </ul>
      ) : (
        <ul className="w-[704px] h-[204px] p-8 bg-white rounded-lg">
          <li className="w-[640px] h-[80px] text-4xl leading-10 font-medium text-left">
            {title}
          </li>
          <li className="flex justify-start pt-6 items-center">
            <Avatar displayname={displayname} iconURL={iconURL} />
          </li>
        </ul>
      )}
    </>
  );
};
export default DisplayBoardEngibeer;
