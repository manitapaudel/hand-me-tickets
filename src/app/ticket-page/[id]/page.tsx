import React from "react";

import TicketForm from "@/app/(components)/TicketForm";
import { ParamsType, TicketType } from "@/app/(utils)/types";

type TicketPageProps = {
  params: ParamsType;
};

const getTicketById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }

  return res.json();
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const EDITMODE = params.id === "new" ? false : true;

  let updateTicketData = {};

  if (EDITMODE) {
    const fetchedTicketData = await getTicketById(params.id);
    updateTicketData = fetchedTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return (
    <main>
      <TicketForm ticket={updateTicketData} />
    </main>
  );
};

export default TicketPage;
