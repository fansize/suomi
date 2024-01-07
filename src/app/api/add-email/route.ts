import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const dateAdded = formattedDate;

  try {
    if (!email || !dateAdded) throw new Error("Email and dateAdded required");
    await sql`INSERT INTO Emails (Email, DateAdded) VALUES (${email}, ${dateAdded});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const emails = await sql`SELECT * FROM Emails;`;
  return NextResponse.json({ emails }, { status: 200 });
}

// 获取当前日期
const currentDate = new Date();
// 格式化日期为特定格式（例如：YYYY-MM-DD）
const formattedDate = currentDate.toISOString().slice(0, 16);
