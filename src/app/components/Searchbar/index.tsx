import { debounce } from "lodash-es";
import { ChangeEventHandler, useMemo, useState } from "react";
import { SearchbarProps } from "./types";

export const Searchbar = ({
  defaultSearch = "",
  onSearch,
}: SearchbarProps): JSX.Element => {
  const [search, setSearch] = useState<string>(defaultSearch);
  const debouncedOnSearch = useMemo(() => debounce(onSearch, 300), [onSearch]);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
    debouncedOnSearch(e.target.value);
  };

  return (
    <input
      placeholder="Search ..."
      type="text"
      value={search}
      onChange={handleSearchChange}
    />
  );
};
