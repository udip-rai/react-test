import { useAppDispatch } from "helpers/hooks/useStoreHooks";
import { searchFormList } from "helpers/redux/_actions";
import { ChangeEvent } from "react";
import * as css from "utils/css";

const SearchSection = () => {
  // Redux
  const dispatch = useAppDispatch();

  // Action when input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.value;

    dispatch(searchFormList(field));
  };

  return (
    <input
      className={css.searchInputCss}
      onChange={handleChange}
      placeholder="Search for first name / last name.."
    />
  );
};

export default SearchSection;
