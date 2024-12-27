import axiosInstance from "./axiosInstance";

const handleApi = async (
  url: string,
  data?: any,
  method?: "post" | "get" | "put" | "delete",
  page?: number,
  limit?: number,
  search?: string,
  params?: {
    department_name?: string,
    employee_type?: string,
    gender?: string
  }
) => {
  let queryString = "";

 
  if (page && limit) {
    queryString += `page=${page}&limit=${limit}`;
  }


  if (search) {
    queryString += queryString ? `&search=${search}` : `search=${search}`;
  }


  if (params) {
    
    const searchParams = new URLSearchParams(params); 
    queryString += queryString ? `&${searchParams.toString()}` : searchParams.toString();
  }


  if (queryString) {
    url = `${url}?${queryString}`;
  }

  // Thực hiện API call
  return await axiosInstance(url, {
    method: method ?? "get",
    data,
  });
};



export default handleApi;