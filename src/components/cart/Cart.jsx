import CartCard from "./CartCard";
import { useCartContext } from "../../contexts/CartContext";

const Cart = () => {
    const { isOpen, close, cartList, calculateTotal } = useCartContext();

    return (
        <div className={`relative lg:w-2/5 ${isOpen ? '' : 'hidden'} lg:transform lg:translate-0`}>

            <div className={`fixed top-0 right-0 h-screen w-full lg:h-screen transform
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}  transition-transform duration-300 ease-in-out z-45
            flex flex-col bg-amber-700 dark:bg-mist-600 elegance:bg-elegance-500`}>
                
                <div className="w-full h-1/12 bg-white flex justify-between shrink-0">
                    <h2 className="p-4 text-2xl">Mi carrito</h2>
                    <button className="p-4 text-2xl cursor-pointer text-red-600" onClick={close}>x</button>
                </div>

                <div className="flex-1 9/12 overflow-y-auto p-4">
                    {cartList.map((item) => <CartCard key={item.id} product={item}/>)}
                </div>
                
                <div className="w-full h-1/12 bg-white flex justify-between shrink-0">
                    <h3 className="p-4 text-2xl text-right w-full">Total: {calculateTotal()} </h3>
                </div>                
            </div>
        </div>
    )
}

export default Cart