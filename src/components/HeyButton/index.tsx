import { Dispatch, SetStateAction, useCallback, useState, VFC } from "react";
import styles from "./index.module.css";
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
    <div className={styles.container}>
      <button
        className={styles.btnEmergency}
        onClick={handleClick}
        disabled={disabled}
        style={disabled ? { cursor: "not-allowed" } : undefined}
      >
        <span className={styles.btnEmergencyBottom}></span>
        <span className={styles.btnEmergencyTop}>
          <span>へぇ</span>
        </span>
      </button>
      <div className={styles.heyCount}>
        {count}
        <small>へぇ</small>
      </div>
    </div>
  );
};
export default HeyButton;
