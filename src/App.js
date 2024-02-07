import React, {useEffect, useState} from 'react';
import './App.css';
import QuestionBox from './Components/QuestionBox';
import LeaderBoard from './Components/LeaderBoard';

function App() {

  const [questionCount, setQuestionCount] = useState(0);
  const [questions,setQuestion]=useState({data:[]})
  const [answerInput,setAnswerInput] = useState();
  const [leaderBoardData,setleaderBoardData] = useState({});
  const fillQuestion = async ()=>{
    try{
      const res = await fetch("http://localhost:5000/api/questions",{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
      });
      const data = await res.json()
      // console.log(data)s
      setQuestion({
        data:data.data
      });
    }catch (err){
      console.log(err);
    }
  }
  const filldata  =async()=>{
    try{
    const res = await fetch("http://localhost:5000/api/studentlist",{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    });
    
    const data = await res.json()
    setleaderBoardData(data);
  }catch (err){
    console.log(err);
  }
  }
  useEffect(()=>{
    filldata()
    fillQuestion()
  },[]);
  const sendAnswer = ()=>{
    if(answerInput === null ||answerInput === undefined|| answerInput ===""){
      
      return
    }
    try{
    fetch("http://localhost:5000/api/update-data",{
      method:'POST',
      headers:{
        "Content-Type":'application/json'
      },
      body: JSON.stringify({ answer:answerInput,questionNo:questionCount })
    });
    setQuestionCount(questionCount+1)
    setAnswerInput("")
  }catch (err){
    console.log(err);
  }
  }
  return (
    <div className="App">

     <h1>
      <div className='logo'>?</div>
      Whom do you prefer</h1>
      
      
      <QuestionBox 
      questionCount = {questionCount}
      questions = {questions}
      setQuestionCount= {setQuestionCount}
      leaderBoardData = {leaderBoardData}
      answerInput = {answerInput}
      setAnswerInput = {setAnswerInput}
      sendAnswer={sendAnswer}
      />
      <LeaderBoard
      leaderBoardData = {leaderBoardData}
      question = {questions}
      />
    </div>
  );
}

export default App;
