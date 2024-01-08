import React, { ReactNode } from "react";

export type QuestionPatternSchema = {
  question_images: string[];
  answer_image?: string;
  real_child?: ReactNode;
};

const QuestionPattern: React.FC<QuestionPatternSchema> = (props) => {
  // Props
  const { question_images, answer_image, real_child } = props;

  return (
    <div className="w-full h-full">
      {/* Question section */}
      <div className="question-section">
        <h1 className="font-bold">Question</h1>

        {/* List of question images */}
        {question_images?.map((item: string, idx: number) => (
          <div key={`${idx}. Question`} className="flex">
            <img src={item} />
          </div>
        ))}
      </div>

      {/* Answer section */}
      <div className="question-section">
        <h1 className="font-bold">Answer</h1>
        <div className="flex max-w-[50%]">
          {answer_image && <img src={answer_image} />}
        </div>
      </div>

      {real_child && real_child}
    </div>
  );
};

export default QuestionPattern;
