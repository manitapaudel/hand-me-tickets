import { NextResponse } from "next/server";
import Ticket from "@/app/(models)/Ticket";

export async function DELETE(req: any, { params }: any) {
  try {
    const { id } = params;

    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
      },
      { status: 500 }
    );
  }
}
