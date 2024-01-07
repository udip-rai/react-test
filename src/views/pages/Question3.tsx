/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  question3_1_png,
  question3_2_png,
  question3_3_png,
} from "assets/images";
import { QuestionPattern } from "helpers/components";

const Question3 = () => {
  // question image (s)
  const question_images = [question3_1_png, question3_2_png, question3_3_png];
  const answer_image = "";

  // Custom props for question
  const questionProps = { question_images, answer_image };

  return <QuestionPattern {...questionProps} />;
};

export default Question3;
