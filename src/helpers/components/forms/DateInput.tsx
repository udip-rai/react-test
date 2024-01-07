import * as css from "utils/css";
import { FormInputSchema } from "utils/schemas/GlobalSchema";

const DateInput: React.FC<FormInputSchema> = (props) => {
  // Props
  const { common, form } = props;

  // Destructuring props
  const { label, input, placeholder, defaultValue } = common;
  const { register, errors } = form;

  // Form error
  const errorMsg = errors && errors[input] && errors[input]?.message.toString();

  return (
    <div className="flex flex-col relative h-[100px]">
      <label htmlFor={input}>{label}</label>
      <input
        id={input}
        key={input}
        {...register(input)}
        className={css.formInputCss}
        type="date"
        placeholder={placeholder}
        defaultValue={defaultValue && defaultValue}
      />
      {errorMsg && <span className={css.errorMsgCss}>{errorMsg}</span>}
    </div>
  );
};

export default DateInput;
