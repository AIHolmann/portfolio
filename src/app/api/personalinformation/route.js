import { connecDB } from "../../../libs/mongodob";
import personalInformation from "../../../models/personalInformation";
import { NextResponse } from "next/server";

export async function GET() {
  await connecDB();
  const personalinformation = await personalInformation.find();

  return NextResponse.json(personalinformation);
}
