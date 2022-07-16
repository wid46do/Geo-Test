import { useSelector, useDispatch } from "react-redux"
import { updateAnswer } from "../redux/Question";

export default function Answer({answers, handleAnswer}){

    const htmlDecode = (input) => {
        const doc = new DOMParser().parseFromString(input, 'text/html');
        return doc.documentElement.textContent;
    };

    return(
        <>
            {answers.map((answer) => (
                <div className="col-12 col-md-6 col-lg-6 p-2">
                    <div 
                        className="card"
                        key={answer}
                        onClick={() => handleAnswer(answer)}
                    >
                        <div className="card-body">
                            {htmlDecode(answer)}
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}