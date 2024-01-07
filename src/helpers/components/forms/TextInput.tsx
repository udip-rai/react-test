/* eslint-disable @typescript-eslint/no-explicit-any */
type TextInputSchema = {
  form: any;
  common: any;
};

const TextInput: React.FC<TextInputSchema> = (props) => {
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
        className="w-half h-[40px] px-5 max-w-[200px] rounded-md border-[1px] border-gray-400"
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue && defaultValue}
      />
      {errorMsg && <span className="text-red-400 text-xs">{errorMsg}</span>}
    </div>
  );
};

export default TextInput;
