import React from 'react'

const TextInput = ({sendAnswer,answerInput,setAnswerInput}) => {
  const changeInput = (e)=>{
    setAnswerInput(e.target.value);
  }
  return (
    <>
    <div className="inputArea">
        <input type="text" name="" value={answerInput} onChange={changeInput}id="inputBox" placeholder='Write Your Answer' />
    </div>
    <button className='forTextOnly' disabled={false} onClick={sendAnswer}>Send</button>
    </>
  )
}

export default TextInput