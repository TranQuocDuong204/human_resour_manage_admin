import { utils, writeFileXLSX } from "xlsx";

export const handleExportExcel = (data: any, name: string) => {
  const ws = utils.json_to_sheet(data);
  const wd = utils.book_new();
  utils.book_append_sheet(wd, ws, "data");
  writeFileXLSX(wd, name ?? "data.xlsx");
};
