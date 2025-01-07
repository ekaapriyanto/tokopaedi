import { SidebarDashboard } from "@/app/components/SidebarDashboard";
import { NavbarDashboard } from "../components/NavbarDashboard";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex w-full">
        <SidebarDashboard />
        <div>
          <div className="fixed top-0 z-40 w-full">
            <NavbarDashboard />
          </div>

          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
