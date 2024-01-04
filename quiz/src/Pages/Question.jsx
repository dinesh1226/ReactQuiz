import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Question = ({ currentQuestion }) => {
  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <div>
        {currentQuestion.options.map((option) => (
          <label htmlFor="">
            <input type="radio" value={option.text} />
            {option.text}
          </label>
          //   <RadioGroup>
          //     <div className="flex items-center space-x-2">
          //       <RadioGroupItem value={option.text} id="option-one" />
          //       <Label htmlFor="option-one">{option.text}</Label>
          //     </div>
          //   </RadioGroup>
        ))}
      </div>
    </div>
  );
};

export default Question;
