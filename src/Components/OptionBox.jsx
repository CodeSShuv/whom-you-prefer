import React from 'react'

const OptionBox = ({handelClick,data,questionCount}) => {
  return (
    <>
    <div className="row1">

<div className="optionBox" onClick={handelClick}>{data.data[questionCount].option1}</div>
<div className="optionBox" onClick={handelClick}>{data.data[questionCount].option2}</div>
</div>
<div className="row2">
<div className="optionBox" onClick={handelClick}>{data.data[questionCount].option3}</div>
<div className="optionBox" onClick={handelClick}>{data.data[questionCount].option4}</div>
</div>
    </>
  )
}

export default OptionBox