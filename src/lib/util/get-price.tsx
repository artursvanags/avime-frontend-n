export const findCheapestVariantPrice = (product: any) => {
    let cheapestPrice = Infinity; // Initialize with a high value
    for (const variant of product.variants) {
      if (variant.prices && variant.prices.length > 0) {
        const priceInCents = variant.prices[0].amount; // Assuming the price is in the first price entry
        const priceInDollars = priceInCents / 100; // Convert cents to dollars
        
        // Check if there is a price_list price, and if so, use that instead
        const priceListPrice = variant.prices.find((priceItem: any) => priceItem.price_list_id);
        if (priceListPrice) {
          const priceListAmount = priceListPrice.amount / 100; // Convert cents to dollars
          if (priceListAmount < cheapestPrice) {
            cheapestPrice = priceListAmount;
          }
        } else {
          if (priceInDollars < cheapestPrice) {
            cheapestPrice = priceInDollars;
          }
        }
      }
    }
    return cheapestPrice.toFixed(2); // Format with 2 decimal places if needed
  };