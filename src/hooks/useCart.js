import { useEffect, useState } from "react";

export const useCart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((prev) => !prev);

    return {isOpen, open, close, toggle}
}

export const useShoppingCartlist = (listName) => {
    //listName es el nombre con el que está guardado en localStoraf

     //estado de el carrito de productos
    //recuperar lista del local storage (si existe)
    const [cartList, setCartlist] = useState(() => {
        const saved = localStorage.getItem(listName);
        return saved ? JSON.parse(saved) : [];
    });

      //añadir a cardlist
  const addToCartlist = (product) => {
    //Revisa si el producto ya está en la lista para no agregarlo si no sumarle uno
    const productAlreadyInPlaylist = cartList.find( item => item.id === product.id);
    if(!productAlreadyInPlaylist){
      setCartlist([...cartList, { ...product, quantity: 1, totalPrice: product.price }]);
    } else {
      const updatedList = cartList.map((item) => {
        if(item.id === product.id){
          let newQuantity = item.quantity + 1;
          console.log(newQuantity);
          return { ...item, quantity: newQuantity, totalPrice: item.price * newQuantity }
        } else {
          return item
        }
      } );
      setCartlist(updatedList);
    }
  };

   const updateQuantity = (id, amount) => {
    /*Math.max(1, item.quantity + amount): Compara el número 1 con el resultado de la cuenta 
    y se queda con el más alto para evitar que baje a 0.
    La eliminación será con el botón con icono de basurero*/
    setCartlist(prev => prev.map(item => {
        if(item.id === id){
          let newQuantity = item.quantity + amount;
          //console.log("En uodateQuantity" + newQuantity)
          let quantityToUpdate = Math.max(1, newQuantity)
          return  { ...item, quantity: quantityToUpdate, totalPrice: item.price * quantityToUpdate }
        } else {
          return item
        }
    }));
  };

  const removeFromShoppingCartlist = (id) => setCartlist(prev => prev.filter(item => item.id !== id));

  const calculateTotal = () => cartList.reduce((accumulator, currentValue) =>accumulator+ Number(currentValue.totalPrice), 0);

  //Guardar en Local Storage cuando cambie
  useEffect(() => {
    localStorage.setItem(listName, JSON.stringify(cartList));
  }, [cartList, listName])

  

  return {cartList, setCartlist, addToCartlist, updateQuantity, removeFromShoppingCartlist, calculateTotal}
}