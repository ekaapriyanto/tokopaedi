import { getDbConnection } from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await getDbConnection();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [categoryimage] = await (db as any).query(
      "SELECT * FROM categoryimage"
    );
    return NextResponse.json({
      status: 200,
      message: "Berhasil",
      data: categoryimage,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Gagal",
      data: error,
    });
  }
}
