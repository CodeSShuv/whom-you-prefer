import React from 'react'
import "./Css/questionBox.css"
// import OptionBox from './OptionBox'
import TextInput from './TextInput'
const QuestionBox = ({questions,questionCount,setQuestionCount,sendAnswer,leaderBoardData,answerInput,setAnswerInput}) => {
    const OptionClick = (e)=>{
        setQuestionCount(()=>questionCount+1);
    }
  return (
    <div className='questionContainer'>
        <div className="questionArea">{questions.data[questionCount]}</div>
        <div className="optionsArea">
            <TextInput answerInput={answerInput} setAnswerInput = {setAnswerInput} sendAnswer = {sendAnswer} />
            {/* <OptionBox handelClick={OptionClick} data = {data} questionCount = {props.questionCount}/> */}
        </div>
    </div>
  )
}

export default QuestionBox
