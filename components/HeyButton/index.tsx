import { Dispatch, SetStateAction, useState, VFC } from "react";
import styles from "./index.module.css";
type Props = {
  incrementHey: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
};

const HeyButton: VFC<Props> = (props) => {
  const { incrementHey, disabled = false } = props;
  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (count < 20) {
      setCount((prev) => prev + 1);
      incrementHey((prev) => prev + 1);
    }
  };
  if (disabled) {
    // 非活性の場合
    return (
      <div className={styles.container}>
        <a className={styles.btnEmergency} style={{ cursor: "not-allowed" }}>
          <span className={styles.btnEmergencyBottom}></span>
          <span className={styles.btnEmergencyTop}>
            <span>へぇ</span>
          </span>
        </a>
        <div className={styles.heyCount}>
          {count}
          <small>へぇ</small>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <a className={styles.btnEmergency} onClick={handleClick}>
          <span className={styles.btnEmergencyBottom}></span>
          <span className={styles.btnEmergencyTop}>
            <span>へぇ</span>
          </span>
        </a>
        <div className={styles.heyCount}>
          {count}
          <small>へぇ</small>
        </div>
      </div>
    );
  }
};
export default HeyButton;
