import { useState } from "react";
import { QuestionsData } from "@/QuestionsData";
import Question from "./Question";

const QuizPage = () => {
  // console.log(QuestionsData);
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  return (
    <div className=" w-screen  h-screen flex justify-center items-center flex-col">
      <div className="bg-cyan-900 w-[600px] text-white px-4 py-6  gap-5 rounded-xl text-left">
        <span className="py-4">Timer: 90 sec</span>
        <Question currentQuestion={QuestionsData[currentQuestionIndex]} />
      </div>
      <div>c</div>
      <div></div>
    </div>
  );
};

export default QuizPage;
