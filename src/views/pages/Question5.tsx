import { question5_png } from "assets/images";
import { QuestionPattern } from "helpers/components";

const Question5 = () => {
  // question image (s)
  const question_images = [question5_png];
  const answer_image = "";

  // Custom props for question
  const questionProps = { question_images, answer_image };

  return <QuestionPattern {...questionProps} />;
};

export default Question5;
