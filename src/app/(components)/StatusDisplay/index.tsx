import React from "react";

import { getColor } from "@/app/(utils)";

type Props = {
  status: string;
};

const StatusDisplay = ({ status }: Props) => {
  return (
    <div
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </div>
  );
};

export default StatusDisplay;
