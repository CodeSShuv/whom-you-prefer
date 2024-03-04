import React, {useEffect, useState} from 'react';
import './App.css';
import QuestionBox from './Components/QuestionBox';
import LeaderBoard from './Components/LeaderBoard';
import { handleSubmit } from './Firebase/updateDataToFirebase';


function App() {
  const [leaderBoardData,setleaderBoardData] = useState({data:[]});
  const [questionCount, setQuestionCount] = useState(0);
    const [questions,setQuestion]=useState({data:[]})
    const [answerInput,setAnswerInput] = useState();
  
  const [update,setUpdate]= useState(0);
  const fillQuestion = async ()=>{
    try{
      const res = await fetch("https://questionswdyp-default-rtdb.firebaseio.com/data.json",{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
      });
      const data = await res.json()
    
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
    await setleaderBoardData({data:data.data});
    console.log(leaderBoardData)
  }catch (err){
    console.log(err);
    alert("Couldn't Fetch data");
  }
  }
  useEffect(()=>{
    filldata()
    fillQuestion()
  },[update]);
  const sendAnswer = ()=>{
    if(answerInput === null ||answerInput === undefined|| answerInput ===""){
      
      return
    }
    try{
    const submissionResult = handleSubmit(leaderBoardData,answerInput,questionCount)
    if(submissionResult){
      setQuestionCount(questionCount+1)
    setAnswerInput("")
    setUpdate(e=>e+1)
    }
    
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
      
      
      {leaderBoardData && questions?(<><QuestionBox
        questionCount={questionCount}
        questions={questions}
        setQuestionCount={setQuestionCount}
        leaderBoardData={leaderBoardData}
        answerInput={answerInput}
        setAnswerInput={setAnswerInput}
        sendAnswer={sendAnswer} /><LeaderBoard
          leaderBoardData={leaderBoardData}
          question={questions} /></>):""}
    </div>
  );
}

export default App;
// export {leaderBoardData,answerInput,questionCount}