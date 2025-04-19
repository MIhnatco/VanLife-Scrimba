/**
 * Updates the URL search parameters based on the provided key-value pairs 
 * 
 * If the value is 'null', the specified key will be removed from the search parameters
 * Otherwise, the key-value pair will be added or updated in the search parameters
 * 
 * @param {string} key - The name of the query parameter to update.
 * @param {string|null} value  - The value to assign to the query parameter
 * @param {Function} setSearchParams  - The function to update the search parameters
 */


export function handleFilterChange(key, value, setSearchParams) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }