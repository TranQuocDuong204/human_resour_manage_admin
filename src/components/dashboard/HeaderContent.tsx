"use client";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdNavigateNext } from "react-icons/md";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { RiArrowDropDownLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlices";
import { useRouter } from "next/navigation";
import { TiThMenu } from "react-icons/ti";

interface IIsOpenProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeaderContent = ({ isOpen, setIsOpen }: IIsOpenProps) => {
  const auth =
    typeof window !== "undefined"
      ? localStorage.getItem("auth") ?? null
      : false;
  const parsedAuth = auth ? JSON.parse(auth) : null;
  const info = parsedAuth.response;
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const pathSegments = pathname.split("/").filter(Boolean);

  const handleLogout = () => {
    dispatch(logout());

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const handleEditProfile = () => {
    router.push("/dashboard/profile");
  };
  return (
    <section className="sticky top-0 left-0 z-50 bg-white dark:bg-[black] dark:border-[white] p-2 mb-5 shadow ">
      <div className="flex justify-between items-center  px-3 sm:px-0">
        <div
          className="block md:hidden cursor-pointer hover:text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TiThMenu className=" text-2xl" />
        </div>
        <div className="md:flex md:flex-col hidden ">
          <h2 className="text-xl font-bold flex  items-center">
            {pathSegments.map((i, index) => {
              const pathMap: Record<string, { href: string; label: string }> = {
                dashboard: { href: "/dashboard", label: "Dashboard" },
                employees: { href: "/dashboard/employees", label: "Employees"
                  
                 },
                profile: { href: "/dashboard/profile", label: "Profile" },
                projects: { href: "/dashboard/projects", label: "Projects" },
                departments: {
                  href: "/dashboard/departments",
                  label: "Departments",
                },
              };
              const pathItem = pathMap[i];

              if (!pathItem) return null;

              return (
                <Link
                  href={pathItem.href}
                  key={index}
                  className={` flex items-center ml-2 text-sm font-medium ${
                    i === "dashboard" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  } text-slate-500 dark:text-white`}
                >
                  {i !== "dashboard" && <MdNavigateNext className="mr-2" />}
                  {pathItem.label}
                </Link>
              );
              
            })}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <div className=" relative px-3">
            <Input
              placeholder="Search"
              className="px-5 hidden md:block dark:border-white"
            />
            <IoSearch className=" absolute text-lg top-[10px] left-4 hidden md:block mr-2" />
          </div>
          <div className="p-2 bg-gray-200  rounded-lg cursor-pointer hidden md:block">
            <IoMdNotificationsOutline className="text-xl dark:text-black" />
          </div>

          <DropdownMenu>
            <div className=" flex items-center gap-2 px-3 border-solid border-2 border-gray-400 rounded-lg">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="h-10 w-10 rounded-full"
                />
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
              <DropdownMenuItem onClick={handleEditProfile}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
};

export default HeaderContent;
