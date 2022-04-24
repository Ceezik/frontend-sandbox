import React from "react";

export type ImageProps = {
  loader?: React.ReactNode;
} & React.ImgHTMLAttributes<HTMLImageElement>;
