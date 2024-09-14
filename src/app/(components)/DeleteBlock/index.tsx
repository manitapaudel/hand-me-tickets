import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const DeleteBlock = (props: Props) => {
  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:text-red-200 hover:cursor-pointer"
    />
  );
};

export default DeleteBlock;
