import { CiCalendar } from "react-icons/ci";
import { Calendar } from "@/components/ui/calendar";
const ScheduleDashboard = ({ date, setDate }: any | Date | undefined) => {
  return (
    <div>
      <div className=" flex items-center justify-between pb-4">
        {" "}
        <h2 className="text-xl font-semibold">My Schedule</h2>
        <span className="  text-2xl text-[black]">
          <CiCalendar />
        </span>
      </div>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border  shadow-md   transition duration-300 bg-white dark:bg-black dark:border-[#2D3748] "
      />
    </div>
  );
};

export default ScheduleDashboard;
