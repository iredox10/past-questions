import School from "@/models/school.js";
import { NextResponse } from "next/server";
import ConnectMongoose from "../../../utils/connectMongoose.js";

export async function POST(request) {
  ConnectMongoose();
  try {
    const body = await request.json();
    const school = await School.create(body);
    return NextResponse.json(school);
  } catch (err) {
    return NextResponse.json(err.message);
  }
}

export async function GET() {
  try {
    const schools = await School.find();
    return NextResponse.json(schools);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function PATCH(request, { params }) {
  // const { slug } = params;
  try {
    const school = await School.findOneAndUpdate();
    return NextResponse.json(school);
  } catch (err) {
    return NextResponse.json(err.message);
  }
}
