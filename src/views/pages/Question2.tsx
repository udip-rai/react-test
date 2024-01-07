import { answer1_png, question2_png } from "assets/images";
import { QuestionPattern } from "helpers/components";
import { detectWordsForQuestionTwo } from "./workings/q2";

const Question2 = () => {
  // question image (s)
  const question_images = [question2_png];
  const answer_image = answer2_png;

  // Custom props for question
  const questionProps = { question_images, answer_image };

  // Verification
  console.log("cat", detectWordsForQuestionTwo("UcUNFYGaFYFYGtNUH"));
  console.log("burglar", detectWordsForQuestionTwo("bEEFGBuFBRrHgUHlNFYaYr"));
  console.log(
    "embezzlement",
    detectWordsForQuestionTwo("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")
  );

  return <QuestionPattern {...questionProps} />;
};

export default Question2;
