function maxStockProfit (prices) {
  let maxProfit = -1
  let buyPrice = 0
  let sellPrice = 0
  let shouldUpdateBuyPrice = true
  prices.forEach((price, i) => {
    if (shouldUpdateBuyPrice) buyPrice = price
    sellPrice = prices[i + 1]

    if (sellPrice < buyPrice) shouldUpdateBuyPrice = true
    else {
      const tmpProfit = sellPrice - buyPrice
      if (tmpProfit > maxProfit) maxProfit = tmpProfit
      shouldUpdateBuyPrice = false
    }
  })
  return maxProfit
}

console.log(maxStockProfit([222, 46, 26, 38, 40, 48, 42]))
