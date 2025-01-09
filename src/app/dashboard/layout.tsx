import { SidebarDashboard } from "@/app/components/SidebarDashboard";
import NavbarDashboard from "../components/NavbarDashboard";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen w-full">
        <SidebarDashboard />
        <div>
          <div className="flex-1 flex flex-col">
            <NavbarDashboard />
          </div>

          <div className="flex-1 p-4 overflow-auto">{children}</div>
        </div>
      </div>
    </>
  );
}
