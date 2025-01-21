export const formatRupiah = (value: string | number) => {
  // Konversi input ke string dan hapus karakter non-digit
  const numericValue = String(value).replace(/\D/g, "");

  // Format ke Rupiah
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(numericValue));
};
