import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <div>
      <i className={classes} onClick={onClick} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default Like;
