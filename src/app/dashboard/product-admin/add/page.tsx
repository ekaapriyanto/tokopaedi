"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
import { fetchAddProduct } from "@/service/adminProduct";
import { formatRupiah } from "@/utils/formatRupiah";
import { CheckCircle2, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [isCoupleCategory, setIsCoupleCategory] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.files?.[0]?.name;
    if (fileName) {
      setSelectedFileName(fileName);
    }
  };

  const handleSelectCategoryChange = (value: string) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "category";
    input.value = value;
    document.querySelector("form")?.appendChild(input);

    // Set couple state based on category
    if (value === "couple") {
      setIsCoupleCategory(true);
      handleSelectCoupleChange("1"); // Auto set to Yes
    } else {
      setIsCoupleCategory(false);
    }
  };

  const handleSelectCoupleChange = (value: string) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "couple";
    input.value = value;
    document.querySelector("form")?.appendChild(input);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetchAddProduct(formData);
      console.log("response ", response);
      if (response.status === 201) {
        console.log("status : ", response.status);
        setLoading(false);
        setShowSuccessAlert(true);
        setTimeout(() => {
          router.push("/dashboard/product-admin");
        }, 2000);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setLoading(false);
      setShowErrorAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="w-full p-6 mx-auto bg-slate-50 rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-xl font-bold text-black capitalize dark:text-black">
          Add Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
            <div>
              <label className="text-black dark:text-gray-200">
                Product Name
              </label>
              <Input
                name="name"
                type="text"
                placeholder="Product Name"
                className="mt-2"
                required
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">Price</label>
              <Input
                name="price"
                type="text"
                min={"0"}
                placeholder="Price"
                className="mt-2"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => {
                  e.target.value = formatRupiah(e.target.value);
                }}
                required
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">Category</label>
              <Select
                name="category"
                onValueChange={handleSelectCategoryChange}
                required
              >
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
              <Select
                name="couple"
                onValueChange={handleSelectCoupleChange}
                disabled={isCoupleCategory}
                defaultValue={isCoupleCategory ? "1" : undefined}
                required
              >
                <SelectTrigger className="w-[180px] mt-2">
                  <SelectValue placeholder="Couple" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Couple</SelectLabel>
                    <SelectItem value="1">Yes</SelectItem>
                    <SelectItem value="0">No</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-black dark:text-gray-200">
                Quantity Size S
              </label>
              <Input
                name="qtyS"
                type="number"
                placeholder="Qty Size S"
                className="mt-2"
                min={"0"}
                defaultValue={0}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                required
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">
                Quantity Size M
              </label>
              <Input
                name="qtyM"
                type="number"
                placeholder="Qty Size M"
                className="mt-2"
                min={"0"}
                defaultValue={0}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                required
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">
                Quantity Size L
              </label>
              <Input
                name="qtyL"
                type="number"
                placeholder="Qty Size L"
                className="mt-2"
                min={"0"}
                defaultValue={0}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                required
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">
                Quantity Size XL
              </label>
              <Input
                name="qtyXL"
                type="number"
                placeholder="Qty Size XL"
                className="mt-2"
                min={"0"}
                defaultValue={0}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                required
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">
                Description
              </label>
              <Textarea
                placeholder="Type your description here."
                name="description"
                required
              />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">Info</label>
              <Textarea placeholder="Type your Info here." name="info" />
            </div>

            <div>
              <label className="text-black dark:text-gray-200">Tag</label>
              <Textarea placeholder="Type your Tag here." name="tag" />
            </div>
            <div>
              <label className="block mb-2">Gambar Produk</label>
              <input
                type="file"
                name="image"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
                required
              />
              <Button onClick={handleUploadClick}>Pilih Gambar</Button>
              {selectedFileName && (
                <p className="mt-2 text-sm text-gray-600">
                  File terpilih: {selectedFileName}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button
              variant={"outline"}
              className="mr-5"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "saving..." : "save"}
            </Button>
          </div>
        </form>
      </section>

      <AlertDialog open={showSuccessAlert} onOpenChange={setShowSuccessAlert}>
        <AlertDialogContent className="bg-white">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-500" />
            <AlertDialogTitle className="text-green-800">
              Berhasil!
            </AlertDialogTitle>
          </div>
          <AlertDialogHeader>
            <AlertDialogDescription>
              Produk berhasil ditambahkan. Anda akan dialihkan ke halaman
              produk.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={() => router.push("/dashboard/product-admin")}>
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showErrorAlert} onOpenChange={setShowErrorAlert}>
        <AlertDialogContent className="bg-white">
          <div className="flex items-center gap-2">
            <XCircle className="h-6 w-6 text-red-500" />
            <AlertDialogTitle className="text-red-800">Gagal!</AlertDialogTitle>
          </div>
          <AlertDialogHeader>
            <AlertDialogDescription>
              Terjadi kesalahan saat menambahkan produk. Silakan coba lagi.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={() => setShowErrorAlert(false)}>OK</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
