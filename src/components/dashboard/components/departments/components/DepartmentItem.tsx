import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
const DepartmentItem = ({ dataDepartment, dataUser, isNotFound }: any) => {
  return (
    <>
    {isNotFound ?  <div className=" shadow-md rounded-lg p-3 flex flex-col gap-2 ">
       Not Found
      </div> : <div className=" shadow-md rounded-lg p-3 flex flex-col gap-2 ">
        <div className=" flex flex-row items-center justify-between">
          <h2 className=" flex flex-col text-lg font-semibold">
            {dataDepartment.department_name}
            <span className=" text-sm font-light">
              {dataDepartment.employee_count} members
            </span>
          </h2>

          <Link
            className="text-sm text-violet-500 cursor-pointer hover:text-slate-400"
            href={`/dashboard/departments/${dataDepartment.department_id}`}
          >
            View All
          </Link>
        </div>
        <hr />
        <div className="mt-2">
          {dataDepartment.employees.map((item: any) => {
            const user = dataUser.find((u: any) => u.id === item.user_id);

            return (
              <div
                key={item.id}
                className=" flex items-center justify-between mb-2"
              >
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={item.avatar || "https://github.com/shadcn.png"}
                      alt={user?.username || "Unknown User"}
                    />
                  </Avatar>
                  <div className=" flex flex-col">
                    <h2 className=" text-base font-semibold">
                      {user
                        ? capitalizeFirstLetter(user.username)
                        : "Unknown User"}
                    </h2>
                    <p className=" text-sm font-extralight">{item.position} </p>
                  </div>
                </div>
                <span className=" cursor-pointer">
                  <MdNavigateNext className=" text-lg" />
                </span>
              </div>
            );
          })}
        </div>
      </div>}
      
    </>
  );
};

export default DepartmentItem;
