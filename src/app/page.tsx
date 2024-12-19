"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import DashboardPage from "./(dashboard)/dashboard/page";
import DashboardLayout from "./(dashboard)/dashboard/layout";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  const auth = typeof window !== "undefined" ? localStorage.getItem("auth") ?? null : false;
  const parsedAuth = auth ? JSON.parse(auth) : null;
  
  useEffect(() => {
    if (parsedAuth) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [parsedAuth]);

  return (
    <>
      {isLogin ? (
        <DashboardLayout>
          <DashboardPage />
        </DashboardLayout>
      ) : (
        <div className=" h-[100vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover">
          <Button variant="default">
            <Link href="/auth/">Login</Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default Home;
