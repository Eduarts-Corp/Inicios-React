import './Button.css';

export const Button = ({onClickFn, value}) => {
  return (
      <>

          <button onClick={onClickFn}> {value} </button>
      
      </>
  )
}
