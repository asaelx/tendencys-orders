const formatCurrency = (number) => {
  const amount = parseFloat(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return "$" + amount;
};

export default formatCurrency;
