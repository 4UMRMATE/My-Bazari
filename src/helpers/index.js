export const getDate = (utcDate) => {
  if (utcDate) {
    var date = new Date(utcDate);
    return date.toDateString();
  }
};

export const getPrice = (price) => {
  if (price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }); /* $2,500.00 */
  }
};

export const getNumber = (contact) => {
  if (contact) {
    const splitOn = (slicable, ...indices) =>
      [0, ...indices].map((n, i, m) => slicable.slice(n, m[i + 1]));

    return splitOn(contact, 3, 6).join("-");
  }
};
