/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDbConnection } from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await getDbConnection();
    const [banners] = await (db as any).query(
      "SELECT * FROM banners WHERE isActive = 1"
    );

    return NextResponse.json({
      status: 200,
      message: "Berhasil",
      data: banners,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Gagal",
      data: error,
    });
  }
}
