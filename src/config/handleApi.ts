import axiosInstance from "./axiosInstance";

const handleApi = async (
  url: string,
  data?: any,
  method?: "post" | "get" | "put" | "delete"
) => {
  return await axiosInstance(url, {
    method: method ?? "get",
    data,
  });
};

export default handleApi;