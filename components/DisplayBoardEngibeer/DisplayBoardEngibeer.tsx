import { VFC } from "react";
import Avatar from "../Avatar";
import styles from "./displayboardEngibeer.module.css";
import HeyButton from "../HeyButton/index";//読み取られていない

type Props = {
    text: string;
    displayname: string;
    iconURL: string;
    engibeerCount?: number;
    engibeer?: string;
    count?: number;
    countUser?: number;
    heyCount?: number;
}

const DisplayBoardEngibeer:VFC<Props> = (props) => {
const { displayname, iconURL, engibeerCount, engibeer, count } = props;
const countUser = [];//へえ押した人数を把握するためにuserId入れる
const heyCount = [count];//HeyButtonからへえ数を配列へ入れる
    return(
        <>
        {engibeer && engibeerCount ? (
            //desktop16の時は以下を返す
            <ul className={styles.displayBoardAdj}>
                <li className={styles.displayBoardText}>{engibeer}</li>
                <li className="flex justify-start pt-6 items-center"><Avatar displayname={displayname} iconURL={iconURL}/></li>
            </ul>
        ):(
            <ul className={styles.displayBoardForLiveAdj}>
                <li className={styles.displayBoardNum}>エンジビア{engibeerCount}</li>
                <li className={styles.displayBoardText}>{engibeer}</li>
                <li>
                    <ul className="flex justify-between items-end pt-6">
                        <li className="flex items-center">
                            <Avatar displayname={displayname} iconURL={iconURL}/>
                        </li>
                            {/* //HeyButtonの押された数が集計されてDisplayHey(仮)コンポーネントに入ってくる。集計された数は上限100まで */}
                        <li className={styles.displayHey}>
                            {/* {()=>{
                            for(count=0; count<100; count++){
                                return(
                                    ({countUser} / {heyCount}) * 5;
                                )
                            }}
                            } */}
                            <small>へえ</small>
                        </li>
                    </ul>
                </li>
            </ul>
        )
        } 
        </>
    )
};
export default DisplayBoardEngibeer;