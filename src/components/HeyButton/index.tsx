import { Dispatch, SetStateAction, useCallback, useState, VFC } from "react";
type Props = {
  incrementHey: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
};

const HeyButton: VFC<Props> = (props) => {
  const { incrementHey, disabled = false } = props;
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    if (count < 20) {
      setCount((prev) => prev + 1);
      incrementHey((prev) => prev + 1);
    }
  }, [count]);
  return (
    <div className="flex items-center select-none">
      <button
        className="relative block w-[200px] h-[130px]"
        onClick={disabled ? undefined : handleClick}
        style={disabled ? { cursor: "not-allowed" } : undefined}
      >
        <span className="absolute top-[38px] left-[0px] w-[200px] h-[80px] rounded-[100px/40px] bg-light_blue_100 shadow-btn_01"></span>
        <span className="absolute top-[0px] left-[20px] w-[160px] h-[60px] mt-[30px] bg-light_blue_600 rounded-b-[50%] transition-all duration-300 hover:top-[10px] hover:h-[50px] active:top-[20px] active:h-[40px] before:absolute before:top-[-30px] before:left-[0px] before:w-[160px] before:h-[60px] before:content-[''] before:rounded-[80px/30px] before:bg-light_blue_400">
          <span className="text-[38px] font-bold absolute top-[-24px] left-[0px] w-full transform-gpu scale-y-75 text-center text-white">へぇ</span>
        </span>
      </button>
      <div className="ml-[60px] font-family-[inter] font-extrabold text-[36px] leading-[40px] text-light_blue_600">
        {count}
        <small>へぇ</small>
      </div>
    </div>
  );
};
export default HeyButton;
