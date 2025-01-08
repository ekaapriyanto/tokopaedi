import { SidebarDashboard } from "@/app/components/SidebarDashboard";
import NavbarDashboard from "../components/NavbarDashboard";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex fixed w-full">
        <SidebarDashboard />
        <div>
          <div className="top-0">
            <NavbarDashboard />
          </div>

          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
