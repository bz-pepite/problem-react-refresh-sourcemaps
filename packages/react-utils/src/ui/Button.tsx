//import { isNotEmptyString, Optional } from "@pepite8/ts-utils";
import React from "react";
import { Optional } from "../Optional";

export type ButtonProps = {
  text: Optional<string>;
};

export const Button = ({ text }: ButtonProps) => {
  const myClickFn = () => {
    const r = text == "foo";
    alert(`You've clicked on ${text} 22 ${r}`);
  };
  const displayedText =
    /*isNotEmptyString(text) ? text + " test" : */ "Click here";
  return (
    <button type="button" onClick={() => myClickFn()}>
      Text : {displayedText}
    </button>
  );
};
