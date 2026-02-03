import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const runtime = "nodejs";

const ServiceSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  service: String,
});

const ServiceModel =
  mongoose.models.servicemodel ||
  mongoose.model("servicemodel", ServiceSchema);

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.DB_URL);
}

export async function POST(req) {
  try {
    const data = await req.json();

    await connectDB();

    const details = new ServiceModel({
      name: data.name,
      phone: data.phone,
      service: data.service,
    });

    await details.save();

    return NextResponse.json({ message: "Data received and saved to database" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error in receiving data" },
      { status: 500 }
    );
  }
}
