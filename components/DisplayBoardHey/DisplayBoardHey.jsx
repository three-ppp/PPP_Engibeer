import { Avatar } from "Avatar";
import styles from "./displayboardhey.module.css";

export const DisplayBoardHey = (props) => {
const { text } = props;

    return(
        <ul className={styles.displayBoardAdj}>
            <li className={styles.displayBoardText}>{text}</li>
            <li className={styles.displayBoardAvatarAdj}><Avatar /></li>
        </ul>
    )
};