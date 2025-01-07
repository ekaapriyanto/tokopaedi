import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import HomeClient from "./HomeClient";

export default function App() {
  const faqData = [
    {
      id: 1,
      question: "Seragam Batik untuk Apa Saja?",
      answer:
        "Rianty Batik menghadirkan produk seragam batik untuk memenuhi segala kebutuhan Anda, baik itu Personal, Perusahaan, Sekolah, Kedinasan, Organisasi, serta Komunitas-komunitas yang ingin menunjukkan eksistensinya.",
    },
    {
      id: 2,
      question: "Jenis Seragam Apa yang Diproduksi Rianty Batik?",
      answer:
        "Batik seragam yang diproduksi mulai dari tekstil printing bermotif batik dan batik tulis dalam bentuk kain maupun pakaian jadi siap pakai.",
    },
    {
      id: 3,
      question: "Bagaimana Saya Bisa Mendapatkan Harga Diskon?",
      answer:
        "Dengan memesan dalam jumlah banyak, Anda akan mendapatkan potongan harga sehingga akan lebih hemat.",
    },
    {
      id: 4,
      question: "Berapa Minimal Pembelian?",
      answer:
        "Batas minimum pemesanan adalah 20 potong & Anda akan mendapatkan gratis desain dari kami.",
    },
    {
      id: 5,
      question: "Apa Saya Bisa Mendapat Katalog Produk?",
      answer:
        "Kami akan menyediakan katalog produk (fisik) pada saat bertemu dengan klien.",
    },
    {
      id: 6,
      question: "Berapa Biaya atau Ongkos Kirimnya?",
      answer:
        "Untuk ongkos kirim disesuaikan dengan kota pemesan. Kami bekerjasama dengan dengan beberapa jasa ekspedisi dengan pengiriman cepat dan murah.",
    },
    {
      id: 7,
      question: "Bagaimana Cara Memesan Batik Seragam?",
      answer:
        "Anda dapat menghubungi kontak WA Admin berikut 0889-8909-9909. Untuk informasi & konsultasi lebih lanjut, silahkan mengunjungi kantor pusat kami di alamat WIJAYAKUSUMA WAREHOUSE, Jl. Wijaya Kusuma no. 151B, Kutu Dukuh, Sinduadi, Sleman, DIY, 55284 (Belakang TVRI).",
    },
    {
      id: 8,
      question: "Proses Produksi Batik Seragam Berapa Lama?",
      answer:
        "Batik seragam diproduksi selama kurang lebih 3-4 minggu atau disesuaikan dengan antrian (diluar konsultasi & proses desain).",
    },
    {
      id: 9,
      question: "Bagaimana kualitas hasil produksi Seragam Rianty Batik?",
      answer:
        "Rianty Batik memproduksi batik dengan bahan berkualitas, jahitan rapi, serta nyaman dipakai.",
    },
    {
      id: 10,
      question: "Bisakah Memilih Motif, Warna & Ukuran?",
      answer:
        "Tentu saja bisa. Anda bisa memilih motif, warna & ukuran sesuai dengan kebutuhan perusahaan atau komunitas Anda.",
    },
  ];
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <HomeClient />
      <div className="container flex-col items-center justify-between px-10 mt-4">
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <h1>Keunggulan Kami</h1>
          </div>
        </div>
        <div className="flex h-40 items-center space-x-4 justify-center mt-14">
          <div className="text-center">
            <h1 className="font-bold">Gratis Desain</h1>
            <br />
            <p>
              Kami menyediakan jasa design dengan gratis dengan minimal
              pembelian.
            </p>
          </div>

          <Separator orientation="vertical" />
          <div className="text-center">
            <h1 className="font-bold">Diskon Khusus</h1>
            <br />
            <p>
              Anda akan mendapatkan harga khusus seragaman dengan diskon yang
              menarik.
            </p>
          </div>
          <Separator orientation="vertical" />
          <div className="text-center">
            <h1 className="font-bold">Kualitas Premium</h1>
            <br />
            <p>
              Kami akan memastikan bahwa semua produk yang kami buat tanpa cacat
              produksi dan telah melalui proses quality control yang ketat.
            </p>
          </div>
          <Separator orientation="vertical" />
          <div className="text-center">
            <h1 className="font-bold">MOQ Rendah</h1>
            <br />
            <p>
              Hanya dengan minimal pembelian 20 pcs, Anda bisa mendapatkan semua
              keuntungan ini.
            </p>
          </div>
        </div>
        <div className="inline-flex items-center justify-center w-full mt-4">
          <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <h1>Klien Kami</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4 justify-center mt-4">
          <Image
            src="https://riantybatik.co.id/wp-content/uploads/2023/07/px-Featured-Brand_1.webp"
            alt="logo klien"
            width={200}
            height={200}
          />
          <Image
            src="https://riantybatik.co.id/wp-content/uploads/2023/07/px-Featured-Brand_2.webp"
            alt="logo klien"
            width={200}
            height={200}
          />
          <Image
            src="https://riantybatik.co.id/wp-content/uploads/2023/07/px-Featured-Brand_3.webp"
            alt="logo klien"
            width={200}
            height={200}
          />
          <Image
            src="https://riantybatik.co.id/wp-content/uploads/2023/07/px-Featured-Brand_5.webp"
            alt="logo klien"
            width={200}
            height={200}
          />
          <Image
            src="https://riantybatik.co.id/wp-content/uploads/2023/07/px-Featured-Brand_4.webp"
            alt="logo klien"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <h1>FAQ</h1>
        </div>
      </div>
      <div>
        {faqData.map((item) => (
          <Accordion type="single" collapsible className="px-40" key={item.id}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </main>
  );
}
