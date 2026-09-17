import { NextResponse } from "next/server"
import { MOCK_SHOPS } from "@/data/MockData"

export async function GET() {
  const shops = MOCK_SHOPS
  // JSON でレスポンス
  return NextResponse.json({ shops })
}