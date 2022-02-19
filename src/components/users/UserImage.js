import React from "react";

const UserImage = ({ url, customStyle }) => {
  return (
    <img src={url} 
    alt=""
    className="round-img santolain" 
    style={customStyle} />
  );
};

export default UserImage;
