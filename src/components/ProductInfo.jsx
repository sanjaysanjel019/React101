
const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 1000,
        description: "This is a laptop"
    };
  return (
    <div>
        <p>The product name is {product.name}</p>
        <p>The product price is {product.price}</p>
        <p>The product description is {product.description}</p>
    </div>
  )
}

export default ProductInfo