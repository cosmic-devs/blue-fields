/**
 * Capizalize a string
 *
 * @param {string} string Character string to capitalize
 * @returns {string} Capitalized string
 */
export default ([first, ...rest]: string) =>
  (first.toUpperCase() + rest.join('')) as string
