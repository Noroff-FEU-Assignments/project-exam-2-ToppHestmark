export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('no-NO');

  return formatter.format(price);
};
