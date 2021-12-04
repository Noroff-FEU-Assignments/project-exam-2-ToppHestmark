export default new (class Numbers {
  formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('no-NO');

    return formatter.format(price);
  }
})();
