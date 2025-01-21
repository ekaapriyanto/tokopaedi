import { getDbConnection } from "@/lib/dbConnection";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request: Request) {
  const connection = await getDbConnection();

  try {
    const formData = await request.formData();

    // Proses upload gambar
    const imageFile = formData.get("image") as File;
    const timestamp = Date.now();
    const filename = `${timestamp}-${imageFile.name}`;
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(
      process.cwd(),
      "public/uploads/banner",
      filename
    );
    await writeFile(filePath, buffer);

    // Query insert ke database
    const query = `
      INSERT INTO banner (
      image, isActive, created_at, updated_at
      ) VALUES ( ?, ?, NOW(), NOW())
    `;

    const values = [`/uploads/banner/${filename}`, formData.get("isActive")];

    const [result] = await connection.execute(query, values);

    return NextResponse.json(
      {
        message: "Banner berhasil ditambahkan",
        data: result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Terjadi kesalahan",
        data: error,
      },
      { status: 500 }
    );
  } finally {
    connection.release();
  }
}
