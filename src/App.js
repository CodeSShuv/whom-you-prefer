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
      const res = await fetch("https://questionswdyp-default-rtdb.firebaseio.com/data.json",{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
      });
      const data = await res.json()
      console.log(data)
      setQuestion({
        data:data
      });
    }catch (err){
      console.log(err);
      alert("Couldn't Fetch data");
    }
  }
  const filldata  =async()=>{
    try{
    const res = await fetch("https://testserver-d70a0-default-rtdb.firebaseio.com/student.json",{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    });
    
    const data = await res.json()
    console.log(data)
    setleaderBoardData(data);
    console.log(leaderBoardData)
  }catch (err){
    console.log(err);
    alert("Couldn't Fetch data");
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
    
    setQuestionCount(questionCount+1)
    setAnswerInput("")
  }catch (err){
    console.log(err);
    alert("Couldn't Post data");
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
