/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDbConnection } from "@/lib/dbConnection";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    const db = await getDbConnection();
    const [adminProduct] = await (db as any).query("SELECT * FROM product");

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

export async function POST(request: Request) {
  const connection = await getDbConnection();

  try {
    const formData = await request.formData();

    const requiredFields = [
      "name",
      "price",
      "category",
      "couple",
      "image",
      "description",
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData.get(field)
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          message: `Field ${missingFields.join(", empty")} is required`,
          error: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    // Proses upload gambar
    const imageFile = formData.get("image") as File;
    const timestamp = Date.now();
    const filename = `${timestamp}-${imageFile.name}`;
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(
      process.cwd(),
      "public/uploads/product",
      filename
    );
    await writeFile(filePath, buffer);

    // Query insert ke database
    const query = `
      INSERT INTO product (
        id, name, price, category, couple, image, description, 
        tag, info, qtyS, qtyM, qtyL, qtyXL, active, 
        created_at, updated_at
      ) VALUES (generate_next_product_id(),?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;

    const values = [
      formData.get("name"),
      parseFloat(formData.get("price") as string),
      formData.get("category"),
      parseInt(formData.get("couple") as string),
      `/uploads/product/${filename}`,
      formData.get("description"),
      formData.get("tag"),
      formData.get("info"),
      parseInt(formData.get("qtyS") as string),
      parseInt(formData.get("qtyM") as string),
      parseInt(formData.get("qtyL") as string),
      parseInt(formData.get("qtyXL") as string),
      formData.get("active"),
    ];

    const [result] = await connection.execute(query, values);

    return NextResponse.json(
      {
        message: "Produk berhasil ditambahkan",
        data: result,
        status: 201,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Terjadi kesalahan",
        data: error,
        status: 500,
      },
      { status: 500 }
    );
  } finally {
    connection.release();
  }
}
