// Normalize a string: lowercase, trim, collapse multiple spaces
export const normalize = (str: string) =>
  str.toLowerCase().replace(/\s+/g, " ").trim();

/**
 * Determines whether an item's name matches the given search term.
 *
 * This function:
 * - Normalizes both the item name and search term for consistent comparison
 * - Supports multi-word search (e.g., "cup cake")
 * - Handles basic singular/plural forms (e.g., "cakes" vs "cake")
 * - Handles case sensitivity
 *
 * Note: This implementation performs simple substring matching.
 * Future enhancements may include fuzzy search to support typos or near-matches
 * (e.g., "ckaes" matching "cakes").
 */
export const matchesSearchTerm = (itemName: string, searchTerm: string) => {
  const normalizedItem = normalize(itemName);
  const normalizedSearch = normalize(searchTerm);

  const searchWords = normalizedSearch.split(" ");

  return searchWords.every(
    (word) =>
      normalizedItem.includes(word) ||
      normalizedItem.includes(word.replace(/s$/, "")) // Handle plural/singular (e.g. "cakes" vs "cake")
  );
};
