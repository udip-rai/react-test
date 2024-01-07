import * as css from "utils/css";
import { FormInputSchema, OptionSchema } from "utils/schemas/GlobalSchema";

const TextInput: React.FC<FormInputSchema> = (props) => {
  // Props
  const { common, form } = props;

  // Destructuring props
  const { label, input, defaultValue, options } = common;
  const { register, errors } = form;

  // Form error
  const errorMsg = errors && errors[input] && errors[input]?.message.toString();

  return (
    <div className="flex flex-col relative h-[100px]">
      <label htmlFor={input}>{label}</label>
      <select
        id={input}
        key={input}
        {...register(input)}
        className={css.formInputCss}
        type="text"
        defaultValue={defaultValue && defaultValue}
      >
        {options?.map(({ label, value }: OptionSchema) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {errorMsg && <span className={css.errorMsgCss}>{errorMsg}</span>}
    </div>
  );
};

export default TextInput;
