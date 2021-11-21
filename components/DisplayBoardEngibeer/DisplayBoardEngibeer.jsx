import { Avatar } from "./Avatar";
import styles from "./displayboardEngibeer.module.css";
import { BroadcastItem } from './BroadcastItem';
import { EngibeerAddPage } from '/pages/before/[broadcastId]/engibeer/add';//URLが怪しい
import { DisplayHey } from './DisplayHey';//へえ数を表示するコンポーネント（仮）

export const DisplayBoardHey = (props) => {
const { text, displayname, iconURL, engibeerCount, engibeer } = props; //engibeerはEngibeerAddPageで取得された内容
const userEditingEngibeerURL = '/live/放送ID';//desktop16
    return(
        <>
        {userEditingEngibeerURL ? 
            //desktop16の時は以下を返す
            <ul className={styles.displayBoardAdj}>
                <li className={styles.displayBoardText}>{text}</li>
                <li className={styles.displayBoardAvatarAdj}><Avatar displayname={displayname} iconURL={iconURL}/></li>
            </ul>:
            <ul className={styles.displayBoardAdj}>
                <li className={styles.displayBoardNum}>エンジビア{engibeerCount}</li>
                <li className={styles.displayBoardText}>{engibeer}</li>
                <li className={styles.displayBoardAvatarAdj}><Avatar displayname={displayname} iconURL={iconURL}/></li>
                {/* //HeyButtonの押された数が集計されてDispayHey(仮)コンポーネントに入ってくる。集計された数は上限100まで */}
                <li><DisplayHey /></li>
            </ul>
        } 
        </>
    )
};