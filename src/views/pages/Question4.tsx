/* eslint-disable @typescript-eslint/no-explicit-any */
import { answer4_png, question4_png } from "assets/images";
import { QuestionPattern, SelectInput, TextInput } from "helpers/components";
import { useForm } from "react-hook-form";
import * as demoForm from "./workings/q4";
import { yupResolver } from "@hookform/resolvers/yup";
import { demoFormValidation } from "utils/validations/formValidation";
import DateInput from "helpers/components/forms/DateInput";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "helpers/hooks/useStoreHooks";
import { setFormList } from "helpers/redux/_actions";
import { btnClass } from "utils/constants";

const Question4 = () => {
  // Redux
  const dispatch = useAppDispatch();
  const { formList: storeList } = useAppSelector(
    (state: RootState) => state.Global
  );

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(demoFormValidation) });

  // Action when form is submitted
  const onsubmit = (data: any) => {
    console.log([data]);
    dispatch(setFormList([data]));
  };

  // Required props
  const form = { register, errors };

  const real_child = (
    <div className="flex">
      <div className="flex basis-2/3 p-5">
        <form
          className="border-2 border-gray-800 bg-white min-w-[400px] p-5 grid grid-cols-3 gap-3"
          onSubmit={handleSubmit(onsubmit)}
        >
          <TextInput {...demoForm.firstName(form)} />
          <TextInput {...demoForm.lastName(form)} />
          <TextInput {...demoForm.age(form)} />
          <DateInput {...demoForm.dob(form)} />
          <TextInput {...demoForm.phone(form)} />
          <SelectInput {...demoForm.gender(form)}></SelectInput>
          <button type="submit" className={btnClass}>
            Submit
          </button>
        </form>
      </div>
      <div className="flex basis-1/3 p-5">
        {!storeList.length ? (
          "Please submit to get array"
        ) : (
          <div className="flex flex-col">
            <h1 className="font-bold">Details fetched from List:: </h1>
            <p>First Name: {storeList[0].first_name}</p>
            <p>Last Name: {storeList[0].last_name}</p>
            <p>Age: {storeList[0].age}</p>
            <p>Date of Birth: {storeList[0].dob}</p>
            <p>Phone number: {storeList[0].phone}</p>
            <p>Gender: {storeList[0].gender}</p>
          </div>
        )}
      </div>
    </div>
  );

  // question image (s)
  const question_images = [question4_png];
  const answer_image = answer4_png;

  // Custom props for question
  const questionProps = { question_images, answer_image, real_child };

  return (
    <>
      <QuestionPattern {...questionProps} />
    </>
  );
};

export default Question4;
