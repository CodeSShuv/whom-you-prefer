import { database } from './connectToFirebase'
// import { leaderBoardData, answerInput, questionCount } from '../App';
import { set,ref } from "firebase/database";
const handleSubmit = async (leaderBoardData,answerInput,questionCount) => {
  // e.preventDefault()
  try {
    for (let i = 0; i < leaderBoardData.data.length; i++) {

      for (let j = 0; j < leaderBoardData.data[i].matches.length; j++) {


        if (answerInput.toLowerCase() === leaderBoardData.data[i].matches[j].toLowerCase() || answerInput.toLowerCase() === leaderBoardData.data[i].name.toLowerCase()) {
          leaderBoardData.data[i].points[questionCount] = leaderBoardData.data[i].points[questionCount] + 1;

          //main codes goes here...
          await set(ref(database, 'student/'),leaderBoardData);
         
        };
      }
    }
    return true;
  } catch (err) {
    alert(err)
    return false;
  }
}
export {handleSubmit}