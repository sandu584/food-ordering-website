// we will display this component if we get any error while fetching data or anything else

import React from "react";

const Message = ({ varient, children }) => {
  return <div className={`alert alert-${varient}`}>{children}</div>;
};

export default Message;
