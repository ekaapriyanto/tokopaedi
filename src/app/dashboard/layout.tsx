import { SidebarDashboard } from "@/app/components/SidebarDashboard";
import NavbarDashboard from "../components/NavbarDashboard";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SidebarDashboard />
      <div>
        <div className="container flex-1 flex flex-col">
          <NavbarDashboard />
        </div>
        <main className="flex-1 p-4 ">{children}</main>
      </div>
    </div>
  );
}
