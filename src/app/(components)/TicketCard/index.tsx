import React from "react";

import { TicketType } from "@/app/(utils)/types";
import { formatTimestamp } from "@/app/(utils)";
import DeleteBlock from "../DeleteBlock";
import PriorityDisplay from "../PriorityDisplay";
import ProgressDisplay from "../ProgressDisplay";
import StatusDisplay from "../StatusDisplay";
import Link from "next/link";

type Props = {
  ticket: TicketType;
};

const TicketCard = ({ ticket }: Props) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex justify-between mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <DeleteBlock id={ticket._id} />
      </div>
      <Link href={`/ticket-page/${ticket._id}`} style={{ display: "contents" }}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2 ">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
