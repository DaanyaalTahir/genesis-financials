const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const numberAsCurrency = (x) => {
  return x ? formatter.format(x) : "";
};
