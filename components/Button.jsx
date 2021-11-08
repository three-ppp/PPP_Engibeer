export const Button = (props) => {
  const { buttonType, text, onClick } = props;
  const primaryStyle = "rounded bg-blue-600 text-white hover:bg-blue-500 py-3 px-5";
  const secondStyle = "rounded bg-blue-100 text-blue-700 hover:bg-blue-200 py-3 px-5";
  const style = buttonType === "second" ? secondStyle : primaryStyle;

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  }

  return(
    <button className={style} onClick={ handleClick }>{text}</button>
  )
};
