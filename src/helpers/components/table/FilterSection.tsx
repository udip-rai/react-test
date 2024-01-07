import { useBoxVisible } from "helpers/hooks/useBoxVisible";
import {
  useAppDispatch,
  useAppSelector,
  RootState,
} from "helpers/hooks/useStoreHooks";
import { filterFormList } from "helpers/redux/_actions";

const category: string[] = ["Male", "Female", "All"];

const FilterSection = () => {
  // Redux
  const dispatch = useAppDispatch();
  const { filterOption } = useAppSelector((state: RootState) => state.Global);

  // Hooks
  const { domRef, isBoxVisible, setIsBoxVisible } = useBoxVisible(false);

  // Action when one of the filter categories is selected
  const handleFilter = (item: string) => {
    dispatch(filterFormList(item));
  };

  // Css for filter item
  const getFilterItemCss = (item: string) => {
    const defaultCss = "text-sm cursor-pointer hover:text-blue-600";
    const color = item.toLowerCase() === filterOption ? "text-blue-600" : "";

    return `${defaultCss} ${color}`;
  };

  return (
    <div className="filter-section relative">
      <div
        onClick={() => setIsBoxVisible(true)}
        className="text-blue-500 hover:text-blue-700 font-bold cursor-pointer"
      >
        Filter Options
      </div>

      {isBoxVisible && (
        <div
          ref={domRef}
          className="absolute right-0 p-2 bg-white shadow-custom-one min-w-[100px] border-[1px] border-black-300 rounded-md flex flex-col gap-2"
        >
          {category.map((item: string, idx: number) => {
            return (
              <p
                onClick={() => handleFilter(item)}
                key={`${idx}. Category Filter`}
                className={getFilterItemCss(item)}
              >
                {item}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
