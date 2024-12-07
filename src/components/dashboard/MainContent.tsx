
import { IoSearchSharp } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
const MainContent = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div className="w-full md:w-[80%] lg:w-[87%] xl:w-[87%] p-4 overflow-y-auto bg-gray-50 rounded-lg">
        <section>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Hello Robert</h2>
              <p className=" font-light">Good Morning</p>
            </div>
            <div className="flex items-center gap-3">

            <input type="text" placeholder="search" />
            </div>
          </div>
        </section>
        {children}
      </div>
    )
}


export default MainContent