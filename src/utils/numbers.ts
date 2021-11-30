export default new (class Numbers {
  formatter = new Intl.NumberFormat('no-NO');

  formatPrice(price: number) {
    return this.formatter.format(price);
  }
})();
