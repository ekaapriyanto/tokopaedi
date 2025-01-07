/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchBanners, fetchCategoryImage } from "@/service/landingService";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeClient() {
  const [banners, setBanners] = useState([]);
  const [coverCategory, setCoverCategory] = useState([]);

  //memanggil service api fetchBanner, lalu datanya di simpam ke setBanners(useState)
  useEffect(() => {
    fetchBanners()
      .then((data) => {
        if (data && data.data[0]) {
          setBanners(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching banners:", error);
      });
  }, []); //[] untuk memastika effect berjalan 1 kali(mencegah looping call api)

  useEffect(() => {
    fetchCategoryImage()
      .then((data) => {
        if (data && data.data[0]) {
          setCoverCategory(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching banners:", error);
      });
  }, []);

  return (
    <div>
      <Carousel className="w-full mt-5">
        <CarouselContent>
          {banners.length > 0 &&
            banners.map((item: any) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  <CardContent className="flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt="banner"
                      width={900}
                      height={200}
                    />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="inline-flex items-center justify-center w-full mt-4">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <h1>Category</h1>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10">
        {coverCategory.length > 0 &&
          coverCategory.map((coverCategory: any) => (
            <Card key={coverCategory.id}>
              <CardContent
                className="flex mr-5 w-full items-center justify-center"
                key={coverCategory.id}
              >
                <Image
                  src={coverCategory.imageCategory}
                  alt="banner"
                  width={250}
                  height={200}
                />
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
