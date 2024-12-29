import Link from "next/link";
import EmployeeList from "./EmployeeList";
const DepartmentItem = ({ dataDepartment, dataUser }: any) => {
  return (
    <>
      <div className=" shadow-md rounded-lg p-3 flex flex-col gap-2">
        <div className=" flex flex-row items-center justify-between">
          <div className=" flex flex-col text-lg font-semibold">
            <h2 className="flex items-center gap-2">
              {dataDepartment.department_name}

              <div className="flex items-center gap-2">
                <span
                  className={`text-sm font-semibold bg-green-200 p-1 rounded-md ${
                    dataDepartment?.department_status === "active"
                      ? "text-green-500"
                      : dataDepartment?.department_status === "Inactive"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {dataDepartment?.department_status === "active" && "Active"}
                </span>
              </div>
            </h2>

            <span className=" text-sm font-light">
              {dataDepartment.employee_count} members
            </span>
          </div>

          <Link
            className="text-sm text-violet-500 cursor-pointer hover:text-slate-400"
            href={`/dashboard/departments/${dataDepartment.department_id}`}
          >
            View All
          </Link>
        </div>

        <hr />
        <EmployeeList
          employees={dataDepartment.employees}
          datauser={dataUser}
        />
      </div>
    </>
  );
};

export default DepartmentItem;
