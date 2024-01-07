/* eslint-disable @typescript-eslint/no-explicit-any */
import { question5_png } from "assets/images";
import { QuestionPattern } from "helpers/components";
import { CustomTable } from "helpers/components";

const Question5 = () => {
  // question image (s)
  const question_images = [question5_png];
  const answer_image = "";

  const real_child = <CustomTable />;

  // Custom props for question
  const questionProps = { question_images, answer_image, real_child };

  return <QuestionPattern {...questionProps} />;
};

export default Question5;
