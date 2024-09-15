import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  console.log("POST RAN");
  try {
    const body = await req.json();
    const ticketData = body.formData;

    console.log("Received data:", ticketData);

    await Ticket.create(ticketData);
    return NextResponse.json({ message: "Ticket created!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
