"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const NavbarDashboard = () => {
  return (
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
      {/* <div className="flex items-center px-4">
        <div className="relative mx-auto text-gray-600">
          <input
            className="border border-gray-300 h-10 w-96 px-5 pr-16 rounded-lg text-sm placeholder-current focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-gray-200"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <SearchIcon />
          </button>
        </div>
      </div> */}

      <Breadcrumb className="ml-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/product-admin">
              Product
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center space-x-4 mr-4">
        <Link
          href="#"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
        >
          <NotificationIcon />
        </Link>

        <Link
          href="#"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
        >
          <SettingsIcon />
        </Link>

        <Link
          href="#"
          className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
        >
          <LogoutIcon />
          <span className="font-bold">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarDashboard;

const NotificationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M6.429 2.413a.75.75 0 0 0-1.13-.986l-1.292 1.48a4.75 4.75 0 0 0-1.17 3.024L2.78 8.65a.75.75 0 1 0 1.5.031l.056-2.718a3.25 3.25 0 0 1 .801-2.069z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.237 7.7a4.214 4.214 0 0 1 4.206-3.95H11V3a1 1 0 1 1 2 0v.75h.557a4.214 4.214 0 0 1 4.206 3.95l.221 3.534a7.376 7.376 0 0 0 1.308 3.754a1.617 1.617 0 0 1-1.135 2.529l-3.407.408V19a2.75 2.75 0 1 1-5.5 0v-1.075l-3.407-.409a1.617 1.617 0 0 1-1.135-2.528a7.377 7.377 0 0 0 1.308-3.754zm4.206-2.45a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.877 8.877 0 0 1-1.574 4.516a.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183a8.876 8.876 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
    />
  </svg>
);

const LogoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4"
    />
  </svg>
);
