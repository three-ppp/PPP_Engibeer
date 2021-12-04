const Singin　= () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="self-center text-center">
        <div className="mb-5"><img className="inline-block" src="icon Logo.png" width={ 56 } height={ 60 } alt=""/></div>
        <h1 className="text-4xl mb-2 font-bold text-blue-600 stroke-current text-shadow">エンジビアの泉</h1>
        <p className="text-xl mb-10 font-bold text-blue-400 text-shadow">〜素晴らしきプログラミングマメ知識〜</p>
        <img className="inline-block" src="sample-slack-button.png" width={215} height={50} alt="仮ボタン"/>
      </div>
      <div className="bg-signin-img bg-cover bg-no-repeat bg-center"></div>
    </div>
  )
}

export default Singin
