import QuizObj from './quiz/QuizObj'
import QuestionObj from './question/QustionObj'
import ScoreObj from './score/ScoreObj'

const TempObj = (props) => {
    if(props.type === 'Quiz'){
        console.log(props.quizId);
        
        return QuizObj(props)
    } else if(props.type === 'Question'){
        return QuestionObj(props)
    } else {
        return ScoreObj(props)
    }
}

export default TempObj