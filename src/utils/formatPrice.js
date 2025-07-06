/**
 * Format a numeric value into a localized currency string.
 *
 * @param {number} value - The amount to format.
 * @param {string} [locale='en-US'] - Locale code (e.g., 'en-US', 'fr-FR').
 * @param {string} [currency='USD'] - Currency code (e.g., 'USD', 'GMD').
 * @returns {string} - Formatted price string, e.g., "$123.45".
 */
export default function formatPrice(value, locale = 'en-US', currency = 'USD') {
  if (typeof value !== 'number') {
    console.warn(`formatPrice expected a number, received ${typeof value}`);
    value = Number(value) || 0;
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
