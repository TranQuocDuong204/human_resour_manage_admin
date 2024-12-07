'use client'
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdNavigateNext } from "react-icons/md";




import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RiArrowDropDownLine } from "react-icons/ri";
import { usePathname } from 'next/navigation'
import { MdNotificationsNone } from "react-icons/md";
import { Input } from "@/components/ui/input"
import Link from "next/link";
const HeaderContent = () => {
  const auth = localStorage.getItem('auth') ?? null;
  const parsedAuth = auth ? JSON.parse(auth) : null;
  const info = parsedAuth.response
  const pathname = usePathname()

  const pathSegments = pathname.split('/').filter(Boolean)
  return (
    <section className="sticky top-0 left-0 z-50 bg-white p-2 mb-5 shadow-sm rounded-sm">
      <div className="flex justify-between items-center  ">
        <div className="md:flex md:flex-col hidden ">
          <p className=" font-light text-sm">Pages{pathname}</p>
          <h2 className="text-xl font-bold flex  items-center">
            
            {pathSegments.map((i, index) => {


              if (i === "dashboard") {
                console.log(i);

                return <Link href={`/dashboard`} key={index} className=" text-base text-slate-500">Dashboard</Link>
              } else if (i === "employees") {
                return <Link href={`/dashboard/employees`} key={index} className=" text-base flex items-center text-slate-500"><MdNavigateNext/>Employees</Link>
              } else if (i === "addemployees") {
                return <Link href={`/dashboard/employees/addemployees`} key={index} className=" text-base flex items-center text-slate-500"><MdNavigateNext/>AddEmployees</Link>
              }


            })}

          </h2>








        </div>
        <div className="flex items-center gap-3">
          <div className=" relative px-3">
            <Input placeholder="Search" className="px-5 hidden md:block" />
            <IoSearch className=" absolute text-lg top-[10px] left-4 hidden md:block text-" />
          </div>
          <div className="p-2 bg-gray-200 rounded-lg cursor-pointer hidden md:block">
            <IoMdNotificationsOutline className="text-xl" />
          </div>


          <DropdownMenu >
            <div className=" flex items-center gap-2 px-3 border-solid border-2 border-gray-400 rounded-lg">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" className="h-10 w-10 rounded-full" />
              </Avatar>
              <div className=" flex flex-col gap-0">
                <h3>{info && info.username}</h3>
                <p className=" text-sm text-slate-400">{info && info.role}</p>
              </div>

              <DropdownMenuTrigger>
                <RiArrowDropDownLine className="text-xl" />
              </DropdownMenuTrigger>

            </div>

            <DropdownMenuContent className="mt-3 mr-5">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  )
}


export default HeaderContent