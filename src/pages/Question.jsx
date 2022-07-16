import Answer from '../components/Answer';
import Navbar from '../components/Navbar';
import Timer from "../components/Timer";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { updateAnswer } from "../redux/Question";

export default function Question(){

    const {
        list,
        currentNumber,
    } = useSelector((state)=> state.question)
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const currentQuestion = list[currentNumber - 1];
    const answers = [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
    ].sort(() => Math.random() - 0.5);

    const handleAnswer = (answer) => {
        const newList = [...list];
            newList[currentNumber - 1] = {
            ...currentQuestion,
            answered: answer,
        }
    
        dispatch(updateAnswer(newList));
        if((currentNumber +1 ) > list.length){
            navigate("/result")
        }
    };
    
    return(
        <>
            <Navbar/>
            <div className="question-section mx-3 mx-md-0 mx-lg-0">
                <div className="Timer d-flex justify-content-center mb-3">
                    <div className=""><Timer/></div>
                </div>
                <div className="question border rounded shadow-sm p-3">
                    <p className="mb-0">{currentNumber}. {currentQuestion?.question}</p>
                </div>
                <div className="answer p-1">
                    <div className="row">
                        <Answer answers={answers} handleAnswer={handleAnswer}/>
                    </div>
                </div>
                <div className="question">
                    <button className="btn btn-primary" onClick={handleAnswer}>Skip</button>
                </div>
            </div>

            <footer className='d-flex justify-content-center mt-5'>
                <p>© Ruben E.W. 2022 All rights reserved</p>
            </footer>
        </>
    )
}