import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full flex items-center justify-center bg-radial from-cyan-500 to-blue-500">
      {children}
    </div>
  );
};

export default AuthLayout;
