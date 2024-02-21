import Department from "@models/department";
import { NextResponse } from "next/server";
import ConnectMongoose from "../../../utils/connectMongoose.js";

export async function POST(request, { params }) {
  connectMongoose();
  const { school } = params;
  const body = request.json();
  try {
    const school = await Department.create();
    return NextResponse.json(school);
  } catch (err) {
    console.log(err.message);
  }
}
