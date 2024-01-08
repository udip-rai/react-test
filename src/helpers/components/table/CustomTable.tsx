import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "helpers/hooks/useStoreHooks";
import { ChildrenSchema, FormDetailSchema } from "utils/schemas/GlobalSchema";
import * as css from "utils/css";
import { sortFormList } from "helpers/redux/_actions";
import FilterSection from "./FilterSection";
import SearchSection from "./SearchSection";
import { toSnakeCase } from "utils/methods/stringMethods";
import SortSection from "./SortSection";

// Default headers
const headers: string[] = [
  "First name",
  "Last name",
  "Age",
  "DOB",
  "Phone",
  "Gender",
];

// Custom TH
const TH = ({ children, ...rest }: ChildrenSchema) => {
  // Redux
  const dispatch = useAppDispatch();
  const { sortOption } = useAppSelector((state: RootState) => state.Global);

  // Variables
  const field = toSnakeCase(children?.toString().toLowerCase());
  const isFlag = sortOption[field];

  // Action when sort header is clicked
  const handleSort = () => {
    dispatch(sortFormList({ field, isFlag }));
  };

  return (
    <th onClick={handleSort} {...rest} className={css.tableTH(isFlag)}>
      {children}
    </th>
  );
};

// Custom TD class
const TD = ({ children, ...rest }: ChildrenSchema) => (
  <td {...rest} className={css.tableTD}>
    {children}
  </td>
);

// Table section
const CustomTable = () => {
  // Redux
  const { formList, changedList } = useAppSelector(
    (state: RootState) => state.Global
  );

  // Variables
  const list = changedList ?? formList;

  return (
    <div className="custom-table flex flex-col gap-5">
      {/* Control section for the table */}
      <div className="flex justify-between items-center gap-3">
        <SortSection />
        <div className="flex items-center gap-3">
          <SearchSection />
          <FilterSection />
        </div>
      </div>

      {/* Table section */}
      <div className="flex">
        <table className="table-fixed w-full text-left font-normal font-xs">
          <thead>
            <tr>
              {headers?.map((item: string, idx: number) => (
                <TH key={`${idx}. TH`}>{item}</TH>
              ))}
            </tr>
          </thead>
          <tbody>
            {list?.map((item: FormDetailSchema, idx: number) => (
              <tr key={`${idx}. TD`}>
                <TD>{item?.first_name}</TD>
                <TD>{item?.last_name}</TD>
                <TD>{item?.age}</TD>
                <TD>{item?.dob}</TD>
                <TD>{item?.phone}</TD>
                <TD>{item?.gender}</TD>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
