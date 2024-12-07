"use client";

import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* Các thành phần như logo, form đăng nhập sẽ ở đây */}
      {children}
    </div>
  );
};

export default AuthLayout;