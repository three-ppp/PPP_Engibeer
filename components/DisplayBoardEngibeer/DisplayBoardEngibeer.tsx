import { VFC } from "react";
import Avatar from "../Avatar";
import styles from "./displayboardEngibeer.module.css";

type Props = {
    title: string;
    displayname: string;
    iconURL: string;
    totalHeyCount?: number;
    engibeerNumber?: number;
}

const DisplayBoardEngibeer:VFC<Props> = (props) => {
const { title, displayname, iconURL, totalHeyCount, engibeerNumber } = props;

    return(
        <>
        {totalHeyCount && engibeerNumber ? (
            //desktop13の時は以下を返す
            <ul className={styles.displayBoardForLiveAdj}>
                <li className={styles.displayBoardNum}>エンジビア{engibeerNumber}</li>
                <li className={styles.displayBoardText}>{title}</li>
                <li>
                    <ul className="flex justify-between items-end pt-6">
                        <li className="flex items-center">
                            <Avatar displayname={displayname} iconURL={iconURL}/>
                        </li>
                            {/* //HeyButtonの押された数が集計されてDisplayHey(仮)コンポーネントに入ってくる。集計された数は上限100まで */}
                        <li className={styles.displayHey}>
                            {totalHeyCount}
                            <small>へえ</small>
                        </li>
                    </ul>
                </li>
            </ul>
        ):(
            <ul className={styles.displayBoardAdj}>
                <li className={styles.displayBoardText}>{title}</li>
                <li className="flex justify-start pt-6 items-center"><Avatar displayname={displayname} iconURL={iconURL}/></li>
            </ul>
        )
        } 
        </>
    )
};
export default DisplayBoardEngibeer;