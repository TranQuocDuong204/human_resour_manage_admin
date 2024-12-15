import { SlOptionsVertical } from "react-icons/sl";
const DailyTaskItem = ({ item, index }: any) => {
  return (
    <div
      key={index}
      className=" shadow-md p-3  rounded-lg mb-2 dark:bg-black dark:border-2 dark:border-[#2D3748]"
    >
      <div className=" flex items-center justify-between pb-3">
        <h3 className=" text-sm">{item.date}</h3>
        <span>
          <SlOptionsVertical />
        </span>
      </div>
      {item.tasks.map((task: any, index: number) => (
        <div key={index} className=" flex items-center gap-4 py-2">
          <h3 className=" font-semibold">{task.time}</h3> |
          <div className=" flex flex-col">
            <h4 className=" font-light text-xs">{task.title}</h4>
            <p className=" font-semibold">{task.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DailyTaskItem;
