const getStoredCart =()=>
{
    const gettingItem = localStorage.getItem('cart')
    if(gettingItem)
    {
        return JSON.parse(gettingItem);
    }
    return [];
}

const addToLs =(id)=>
{
    const cart = getStoredCart();
    cart.push(id);
    saveToLs(cart);
}
const saveToLs =(cart)=>
{
    const stringifing = JSON.stringify(cart);
    localStorage.setItem( 'cart' ,stringifing)
}

export { addToLs , getStoredCart}