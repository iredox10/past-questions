import connectMongoose from "@/utils/connectMongoose";
import { NextResponse } from "next/server";
// import { NextResponse } from "next/server";

export async function GET() {
  connectMongoose();
  try {
    return NextResponse.json("hello");
  } catch (err) {
    return NextResponse.json(err);
  }
}
export async function POST(request) {
  const bd = await request.json();
  return NextResponse.json(bd);
}
