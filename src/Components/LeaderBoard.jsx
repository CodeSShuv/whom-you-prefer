import React from 'react'
import "./Css/leaderBoard.css"
import Result from './Result'
const LeaderBoard = ({leaderBoardData,question}) => {
  return (
    <>
    <div className="leaderBoardContainer">
        <header className='leaderBoardTitle'>Leader Board</header>
        {
             question.data.map((e,index)=>{
                    
                 return <Result question={question.data[index]} questionNumber = {index+1} leaderBoardData={leaderBoardData}/>
             })
        }
       
    </div>
    </>
  )
}

export default LeaderBoard