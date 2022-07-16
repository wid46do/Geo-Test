import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Result(){
    const { list } = useSelector((state) => state.question)
    console.log(list);

    const totalLength = list.length;
    const answered = list.filter((question)=>question.answered).length
    const correctAnswered = list.filter((question) => (
        question.answered === question.correct_answer
    )).length;
    const wrongAnswered = list.filter((question) => (
        question.answered && question.answered !== question.correct_answer
    )).length;
    const score = (correctAnswered / totalLength) * 100;

    const navigate = useNavigate()

    const click = () => {
        navigate("/")
    }

    return(
        <>
            <Navbar/>
            <div className="result-page mt-5 mt-md-0 mt-lg-0">
                <div className="result-card px-3">
                    <div className="card-body border rounded shadow">
                        <div className="row">
                            <div className="col-4 px-0 px-md-2 px-lg-2">
                                <p className="text-center mb-0 fw-bold">{correctAnswered}</p>
                                <p className="text-center">Correct</p>
                            </div>
                            <div className="col-4 px-0 px-md-2 px-lg-2">
                                <p className="text-center mb-0 fw-bold">{wrongAnswered}</p>
                                <p className="text-center">Wrong</p>
                            </div>
                            <div className="col-4 px-0 px-md-2 px-lg-2">
                                <p className="text-center mb-0 fw-bold">{answered}</p>
                                <p className="text-center">Answered</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <div>
                                <p className="text-center mb-0 fw-bold">{score}</p>
                                <p className="mb-0">Score</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-grid py-3">
                        <button className="btn btn-primary" onClick={click}>Back</button>
                    </div>
                </div>
            </div>

            <footer className='d-flex justify-content-center mt-5'>
                <p>© Ruben E.W. 2022 All rights reserved</p>
            </footer>
        </>
    )
}