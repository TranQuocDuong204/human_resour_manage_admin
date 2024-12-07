"use client";

import { ProfileForm } from "@/components/auth/FormLogin";



const AuthPage = () => {
  return (
    <div>
      <div className="h-[100vh] flex items-center justify-center">
        <div className="w-96 p-3 m-auto border-solid border-2 border-gray-400 rounded-lg">
          <h2 className="text-4xl text-center font-bold">Login</h2>
          <ProfileForm />
        </div>
      </div>

    </div>
  );
};


export default AuthPage;