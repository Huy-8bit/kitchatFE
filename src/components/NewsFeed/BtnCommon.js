import React from "react";

function BtnCommon(props) {
  const { ComponentIcon, text, className } = props;
  return (
    <div className={className}>
      <ComponentIcon /> {text}
    </div>
  );
}

export default BtnCommon;
