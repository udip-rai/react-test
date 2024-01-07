/* eslint-disable @typescript-eslint/no-explicit-any */
import { question5_png } from "assets/images";
import { QuestionPattern } from "helpers/components";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "helpers/hooks/useStoreHooks";
import { sortFormList } from "helpers/redux/_actions";
import React from "react";
import { btnClass } from "utils/constants";

const Question5 = () => {
  // Redux
  const dispatch = useAppDispatch();
  const { formList: storeList,  } = useAppSelector(
    (state: RootState) => state.Global
  );

  console.log(storeList, "storeList");

  // question image (s)
  const question_images = [question5_png];
  const answer_image = "";

  // Table

  const headers = ["First name", "Last name", "Age", "DOB", "Phone", "Gender"];

  const real_child = (
    <div className="bg-red-300">
      <div className="flex basis-1/3 flex-col">
        <div className="">
          Sort by:
          <button
            className={btnClass}
            onClick={() => dispatch(sortFormList("asc"))}
          >
            Ascending name
          </button>
          <button
            className={btnClass}
            onClick={() => dispatch(sortFormList("desc"))}
          >
            Descending name
          </button>
        </div>
      </div>
      <div className="flex basis-2/3">
        <table>
          <thead>
            <tr>
              {headers?.map((item: string, idx: number) => (
                <th key={`${idx}. TH`}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {storeList?.map((item: any, idx: number) => (
              <React.Fragment key={`${idx}. TD`}>
                <td>{item[0]?.first_name}</td>
                <td>{item[0]?.last_name}</td>
                <td>{item[0]?.age}</td>
                <td>{item[0]?.dob}</td>
                <td>{item[0]?.phone}</td>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Custom props for question
  const questionProps = { question_images, answer_image, real_child };

  return <QuestionPattern {...questionProps} />;
};

export default Question5;
