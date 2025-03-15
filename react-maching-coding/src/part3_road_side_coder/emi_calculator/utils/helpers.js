export function convertToCurrency(currencyCode, number) {
  const newNumber = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currencyCode,
    maximumSignificantDigits: 3,
  }).format(number);

  return newNumber;
}
