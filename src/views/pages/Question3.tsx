/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  answer3_png,
  question3_1_png,
  question3_2_png,
  question3_3_png,
} from "assets/images";
import { QuestionPattern } from "helpers/components";
import { matchHouses } from "./workings/q3";

const Question3 = () => {
  // question image (s)
  const question_images = [question3_1_png, question3_2_png, question3_3_png];
  const answer_image = answer3_png;

  // Verification
  console.log("matchHouses(0)", matchHouses(0));
  console.log("matchHouses(1)", matchHouses(1));
  console.log("matchHouses(4)", matchHouses(4));
  console.log("matchHouses(87)", matchHouses(87));

  // Custom props for question
  const questionProps = { question_images, answer_image };

  return <QuestionPattern {...questionProps} />;
};

export default Question3;
