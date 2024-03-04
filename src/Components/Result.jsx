import React from 'react'


const Result = ({ leaderBoardData, question, questionNumber }) => {
    return (

        <div className='resultContainer'>


            <header>{questionNumber}: {question}</header>

            <ol>
                {

                    leaderBoardData.data.map((e, index) => {



                        return <li key = {index}> {e.name}: <span>{e.points[questionNumber - 1]} </span></li>





                    })
                }

            </ol>
        </div>
    )
}

export default Result