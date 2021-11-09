import Image from 'next/image'
import LogoImage from "../public/logo.svg"
import sampleButton from "../public/sample-slack-button.png"

const Singin　= () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="self-center text-center">
        <LogoImage className="inline-block mb-6"/>
        <h1 className="text-4xl mb-2 font-bold text-blue-600 stroke-current text-shadow">エンジビアの泉</h1>
        <p className="text-xl mb-10 font-bold text-blue-400 text-shadow">〜素晴らしきプログラミングマメ知識〜</p>
        <Image src={ sampleButton } width={215} height={50} alt="仮ボタン"/>
      </div>
      <div className="bg-signin-img bg-cover bg-no-repeat bg-center"></div>
    </div>
  )
}

export default Singin
