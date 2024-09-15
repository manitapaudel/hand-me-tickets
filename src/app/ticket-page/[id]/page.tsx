import React from "react";

import TicketForm from "@/app/(components)/TicketForm";

type TicketPageProps = {
  params: {
    id: string;
  };
};

const TicketPage = ({ params }: TicketPageProps) => {
  return (
    <main>
      <TicketForm />
    </main>
  );
};

export default TicketPage;
