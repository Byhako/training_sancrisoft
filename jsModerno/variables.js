function discountPrices (prices, discount) {
  let discounted = []

  for (let i=0 ; i<prices.length ; i++) {
    let discountPrices = prices[i] * (1 - discount)
    let finalPrice = Math.round(discountPrices * 100) / 100
    discounted.push(finalPrice)
  }

  return discounted
}

console.log(discountPrices([100, 200, 300], 0.5))
