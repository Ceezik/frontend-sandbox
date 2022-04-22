import React from "react";

export type TextInputProps = {
  name: string;
  label?: string;
} & React.HTMLProps<HTMLInputElement>;
