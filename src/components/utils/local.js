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

const removeFromLs =(id)=>
{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id) 
    saveToLs(remaining)

}

export { addToLs , getStoredCart , removeFromLs}