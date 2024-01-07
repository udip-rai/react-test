import { answer1_png, question1_png } from "assets/images";
import { QuestionPattern } from "helpers/components";
import { lessThan100 } from "./workings/q1";

const Question1 = () => {
  // question image (s)
  const question_images = [question1_png];
  const answer_image = answer1_png;

  // Custom props for question
  const questionProps = { question_images, answer_image };

  // Verification
  console.log("lessThan100(50, 50)", lessThan100(51, 50));
  console.log("lessThan100(50, 50)", lessThan100(50, 50));
  console.log("lessThan100(5, 50)", lessThan100(5, 50));

  return <QuestionPattern {...questionProps} />;
};

export default Question1;
