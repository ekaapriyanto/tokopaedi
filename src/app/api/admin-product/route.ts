/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDbConnection } from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await getDbConnection();
    const [adminProduct] = await (db as any).query("SELECT * FROM products");

    return NextResponse.json({
      status: 200,
      message: "Success",
      data: adminProduct,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "failed",
      data: error,
    });
  }
}
