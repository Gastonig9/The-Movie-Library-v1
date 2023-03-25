import React from "react";

export default function MovieWidget(props) {
    return (
      <img
        alt="Widget"
        src={props.imageURL}
        width="40"
        height="30"
        className="bg-primary p-1"
        style={{ marginLeft: 600 , marginTop: 5, cursor: "pointer", border: "2px solid black"}}
      />
    );
  }