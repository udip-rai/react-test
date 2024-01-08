// Buttons
export const btnClass =
  "bg-blue-500 hover:bg-blue-700 px-5 py-2 rounded-md text-white";

// Form
export const formInputCss =
  "w-half h-[40px] px-5 max-w-[200px] rounded-md border-[1px] border-gray-400";
export const errorMsgCss = "text-red-400 text-xs";

// Table
export const tableTH = (isFlag: boolean) =>
  `${
    isFlag ? "bg-green-600" : "bg-blue-600"
  } p-2 border-[1px] border-gray-300 text-white text-sm font-medium cursor-pointer`;
export const tableTD = "p-2 border-[1px] border-gray-300";

// Search input css
export const searchInputCss =
  "w-[300px] max-w-[300px] h-[40px] px-5 max-w-[200px] rounded-md border-[1px] border-gray-400 text-sm";
