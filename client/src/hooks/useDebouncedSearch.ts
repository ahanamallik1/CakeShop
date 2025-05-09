import { useMemo, useState, useEffect } from "react";
import { matchesSearchTerm } from "../utils/matchesSearchTerm";

const useDebouncedSearch = (
  items: any[],
  searchTerm: string,
  delay: number
) => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Debounce logic wait for user to pause typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, delay]);

  // Filter based on debounced search term and matching logic
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      matchesSearchTerm(item.name, debouncedSearchTerm)
    );
  }, [items, debouncedSearchTerm]);

  return filteredItems;
};

export default useDebouncedSearch;
