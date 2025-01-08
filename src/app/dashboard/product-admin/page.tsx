/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAdminProducts } from "@/service/adminProduct";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductAdmin() {
  const [productAdmin, setProductAdmin] = useState([]);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  useEffect(() => {
    fetchAdminProducts()
      .then((data) => {
        if (data && data.data[0]) {
          setProductAdmin(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching banners:", error);
      });
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between items-center mb-4 mr-5">
        <div className="flex items-start px-4">
          <div className="relative mx-auto text-gray-600">
            <input
              className="border border-gray-300 h-10 w-96 px-5 pr-16 rounded-lg text-sm placeholder-current focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-gray-200"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3">
              <SearchIcon />
            </button>
          </div>
        </div>
        <Button>Add Product</Button>
      </div>
      <div className="flex items-center mt-5 mb-5">
        <div className="flex items-center ml-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="apple">Mens</SelectItem>
                <SelectItem value="banana">Woman</SelectItem>
                <SelectItem value="blueberry">Kids</SelectItem>
                <SelectItem value="grapes">Couple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center ml-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Couple" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Couple</SelectLabel>
                <SelectItem value="apple">Yes</SelectItem>
                <SelectItem value="banana">No</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center ml-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="apple">Active</SelectItem>
                <SelectItem value="banana">Menunggu Verifikasi</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Couple</TableHead>
                <TableHead>Qty S</TableHead>
                <TableHead>Qty M</TableHead>
                <TableHead>Qty L</TableHead>
                <TableHead>Qty XL</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productAdmin.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>
                    <Image
                      src={item.image}
                      alt="image product"
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.couple}</TableCell>
                  <TableCell>{item.qtyS}</TableCell>
                  <TableCell>{item.qtyM}</TableCell>
                  <TableCell>{item.qtyL}</TableCell>
                  <TableCell>{item.qtyXl}</TableCell>
                  <TableCell>
                    {item.status === 0 ? (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-600">
                        Menunggu Verifikasi
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                        Active
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="relative">
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === item.id ? null : item.id)
                      }
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                        />
                      </svg>
                    </button>

                    {openMenu === item.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                        <div className="py-1">
                          <Button className="text-left px-4 py-2 hover:bg-gray-100 hover:text-black hover:border-black">
                            Edit
                          </Button>
                          <Button className="text-left px-4 py-2 hover:bg-gray-100 hover:text-black hover:border-black">
                            Detail
                          </Button>
                          <Button className="text-left px-4 py-2 hover:bg-gray-100 hover:text-black hover:border-black">
                            Delete
                          </Button>
                        </div>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

const SearchIcon = () => (
  <svg
    className="text-gray-600 dark:text-gray-200 h-4 w-4 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 56.966 56.966"
  >
    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
  </svg>
);
