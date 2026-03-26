import { useCartContext } from "../contexts/CartContext"

const ProductCard = ({product}) => {

  const { addToCartlist } = useCartContext();

  return (
    <div className="rounded-lg shadow-lg overflow-hidden max-w-80 p-4 border-2 border-black flex flex-col
    bg-amber-200 text-black dark:bg-gray-700 dark:text-white elegance:bg-elegance-300">
            <img src={product.img} alt={product.alt} className="border-2 border-black"/>

            <div className="flex flex-col justify-between h-full">
                <h2 className="open-sans text-xl w-full text-center font-bold mb-2 
                    ">
                    {product.name}
                </h2>
                <p className="text-xl font-semibold mt-auto">${product.price}</p>
                <button className="bg-button-primary hover:bg-amber-40 py-2 px-4 border-2 border-black rounded-lg bg-white dark:bg-gray-500
                 w-full font-semibold cursor-pointer transition duration-200 hover:bg-neutral-400 hover:text-white
                dark:hover:bg-white dark:hover:text-black" onClick={() => addToCartlist(product)}>
                    <i className="bi bi-cart-plus"></i> Añadir al carrito
                </button>
            </div>
    </div>
  )
}

export default ProductCard