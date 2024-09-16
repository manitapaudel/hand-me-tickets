export const getColor = (status: string) => {
  let color = "bg-slate-700";

  switch (status.toLowerCase()) {
    case "done":
      color = "bg-green-200";
      return color;

    case "started":
      color = "bg-yellow-200";
      return color;

    case "not started":
      color = "bg-red-200";
      return color;
  }
  return color;
};

export const formatTimestamp = (timestamp: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate;
};
