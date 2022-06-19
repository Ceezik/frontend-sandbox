import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { ImageProps } from "./types";

export const Image = ({ style, ...props }: ImageProps): JSX.Element => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Skeleton style={style} />}
      <img
        {...props}
        alt={props.alt}
        onLoad={handleLoad}
        style={{ ...style, ...(loading ? { display: "none" } : {}) }}
      />
    </>
  );
};
