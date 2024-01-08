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
import { btnClass } from "utils/css";

const Question4 = () => {
  // Redux
  const dispatch = useAppDispatch();
  const { formList: s } = useAppSelector((state: RootState) => state.Global);

  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(demoFormValidation) });

  // Action when form is submitted
  const onsubmit = (data: any) => {
    dispatch(setFormList(data));
    reset();
  };

  // Required props
  const form = { register, errors };

  const real_child = (
    <div className="flex">
      <div className="flex flex-col basis-2/3 p-5">
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
        {!s.length ? (
          "Please submit to get array"
        ) : (
          <div className="flex flex-col">
            <h1 className="font-bold">Details fetched from List ::</h1>
            <p>First Name: {s[s.length - 1].first_name}</p>
            <p>Last Name: {s[s.length - 1].last_name}</p>
            <p>Age: {s[s.length - 1].age}</p>
            <p>Date of Birth: {s[s.length - 1].dob}</p>
            <p>Phone number: {s[s.length - 1].phone}</p>
            <p>Gender: {s[s.length - 1].gender}</p>
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
