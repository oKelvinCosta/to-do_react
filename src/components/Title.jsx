import React from "react";

export default function Title(props) {
  return (
    <h1 className="mb-4 text-center text-lg font-semibold text-indigo-500">
      {props.children}
    </h1>
  );
}
