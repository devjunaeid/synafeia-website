import ContactUser from "@/models/contact_model";
import connectMongo from "@/utils/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  // var Contact = mongoose.model('contactfrom_model');
  const { name, email, subject, message } = await req.json();
  try {
    await connectMongo();
    await ContactUser.create({ name, email, subject, message });

    return NextResponse.json({
      msg: ["Message Sent Successfully!"],
      success: true
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({
        msg: errorList,
        success: false
      });
    } else {
      return NextResponse.json(error);
    }
  }
}
