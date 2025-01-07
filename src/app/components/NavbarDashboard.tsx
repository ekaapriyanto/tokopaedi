"use client";
import { UserCircle2Icon } from "lucide-react";
import { usePathname } from "next/navigation";

export function NavbarDashboard() {
  const pathName = usePathname();
  return (
    <div className="flex justify-around">
      <div className="ml-5 text-gray-700">{pathName}</div>
      <div>
        <UserCircle2Icon />
      </div>
    </div>
  );
}
