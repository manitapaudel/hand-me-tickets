import React from "react";

type Props = {};

const StatusDisplay = (props: Props) => {
  return (
    <div className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-200">
      done
    </div>
  );
};

export default StatusDisplay;
