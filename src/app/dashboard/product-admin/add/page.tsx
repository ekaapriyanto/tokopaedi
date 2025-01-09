"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function AddProductPage() {
  return (
    <div>
      <section className="w-full p-6 mx-auto bg-slate-50 rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-xl font-bold text-black capitalize dark:text-black">
          Add Product
        </h1>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
            <div>
              <label className="text-black dark:text-gray-200">
                Product Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Product Name"
                className="mt-2"
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">Price</label>
              <Input
                id="price"
                type="text"
                placeholder="Price"
                className="mt-2"
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">Category</label>
              <Select>
                <SelectTrigger className="w-[180px] mt-2">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="men">Mens</SelectItem>
                    <SelectItem value="woman">Woman</SelectItem>
                    <SelectItem value="kids">Kids</SelectItem>
                    <SelectItem value="couple">Couple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-black dark:text-gray-200">Couple</label>
              <Select>
                <SelectTrigger className="w-[180px] mt-2">
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

            <div>
              <label className="text-black dark:text-gray-200">
                Quantity Size S
              </label>
              <Input
                id="qtys"
                type="text"
                placeholder="Qty Size S"
                className="mt-2"
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">
                Quantity Size M
              </label>
              <Input
                id="qtym"
                type="text"
                placeholder="Qty Size M"
                className="mt-2"
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">
                Quantity Size L
              </label>
              <Input
                id="qtyL"
                type="text"
                placeholder="Qty Size L"
                className="mt-2"
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">
                Quantity Size XL
              </label>
              <Input
                id="qtyxl"
                type="text"
                placeholder="Qty Size XL"
                className="mt-2"
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">
                Description
              </label>
              <Textarea placeholder="Type your description here." />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">Info</label>
              <Textarea placeholder="Type your Info here." />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">Tag</label>
              <Textarea placeholder="Type your Tag here." />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-black"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-black">or drag and drop</p>
                  </div>
                  <p className="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button variant={"outline"} className="mr-5">
              Cancel
            </Button>
            <Button>Save</Button>
          </div>
        </form>
      </section>

      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-black">
          Account settings
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Password Confirmation
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
