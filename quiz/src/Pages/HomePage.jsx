import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-sky-950 w-full h-screen flex justify-center items-center flex-col">
      <div className="bg-cyan-900 text-white px-4 py-6  gap-5 rounded-xl">
        <div className="mb-4">
          <h1 className="text-3xl pb-2">Welcome to the Challenge!</h1>
          <p>You will be presented with 3 MCQs</p>
          <p>Can you score 100%?</p>
        </div>
        <Button onClick={() => navigate("/quiz")}>Start Quiz</Button>
      </div>
    </div>
  );
}
