import connectMongoose from "@/utils/connectMongoose";
import { NextResponse } from "next/server";

export async function GET(){
    connectMongoose()
  return Response.json('hello next js')
} 
export async function POST(){
  return Response.json('this is the post route')
} 