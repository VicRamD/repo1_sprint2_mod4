import { useCartContext } from "../../contexts/CartContext";

const CartCard = ({product}) => {
    const { updateQuantity, removeFromShoppingCartlist } = useCartContext();
  return (
    <div className="bg-white p-4 mx-auto flex gap-4 rounded-lg w-11/12 xl:w-10/12 xl:justify-center border-b-2 border-amber-400 dark:border-gray-900">
        <img src={product.img} alt={product.alt}
            className="size-32 rounded-md object-cover"/>
        <div className="size-32 xl:w-36">
            <div className="my-auto">
                {/**Nombre y precio */}
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold truncate">{product.name}</h3>
                </div>
                {/**Descripción */}
                <p className="text-xl">&#36;{product.totalPrice}</p>
                {/**Cantidad y quitar */}
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <i className="bi bi-plus-circle-fill cursor-pointer hover:text-green-600" onClick={() => updateQuantity(product.id, 1)}></i>
                        <p>{product.quantity}</p>
                        <i className="bi bi-dash-circle-fill cursor-pointer hover:text-red-600"  onClick={() => updateQuantity(product.id, -1)}></i>
                    </div>
                    <i className="bi bi-trash cursor-pointer hover:text-red-600" onClick={() => removeFromShoppingCartlist(product.id)}></i>
                </div>
            </div>
            
        </div>
                
        
    </div>
  )
}

export default CartCard