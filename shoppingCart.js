class ShoppingCart {
  products = []
  totalPrice = 0

  addProduct = (product) => {
    if(product.price <= 0) throw new Error("Invalid price.")
    this.products.push(product)
  }

  removeProduct = (id) => {
    const products = this.products.filter(item => item.id != id)
    this.products = products

    // Para diminuir o código, o código acima poderia ser reescrito como:
    // this.products = this.products.filter(item => item.id != id)
  }

  getTotalPrice = () => {
    let totalPrice = 0
    this.products.forEach(item => {
      totalPrice += item.price
    })
    // this.totalPrice = totalPrice
    return totalPrice
  }
}

module.exports = {
  ShoppingCart
}
