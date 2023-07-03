
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price);
    return sum
}

export async function fetchCards() {
    const res = await fetch(`https://fakestoreapi.com/products`, { cache: 'no-cache'})
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
