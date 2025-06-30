import { Navbar } from "./_components/navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full w-full flex flex-col gap-y-10 items-center justify-center bg-radial from-cyan-500 to-blue-500">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
