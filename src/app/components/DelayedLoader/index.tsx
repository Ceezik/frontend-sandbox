import { useEffect, useState } from "react";
import { DelayedLoaderProps } from "./types";

export const DelayedLoader = ({ loader, delay }: DelayedLoaderProps): JSX.Element | null => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), delay);

    return () => clearTimeout(timer);
  });

  return showLoader ? <>{loader}</> : null;
};
