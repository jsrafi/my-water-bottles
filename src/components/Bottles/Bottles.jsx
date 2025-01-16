import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoredCart, removeFromLs } from "../utils/local";

const Bottles = () => {
    const [bottles, setBottles] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        if (bottles.length) {
            const gettingCart = getStoredCart();
            console.log(gettingCart)
            const saveCart = []
            gettingCart.map(id => {
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    saveCart.push(bottle)
                }
            }
            )
            console.log(saveCart)
            setCart(saveCart)
        }

    }, [bottles])


    const [cart, setCart] = useState([]);

    const handleCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLs(bottle.id);
    }

    const handleRemove = id => {
        removeFromLs(id)
        const newCart = cart.filter(bottle => bottle.id !== id);
        setCart(newCart)
    }
    return (
        <div>
            <h1>Wottle</h1>
            <h3>Total Bottles:{bottles.length}</h3>
            <h3>Cart:{cart.length}</h3>

            <div className="cart-container">
                {
                    cart.map(bottle => <div className="new-contain" key={bottle.id}>
                        <img  src={bottle.img}></img>
                        <button onClick={() => handleRemove(bottle.id)}>remove</button>
                    </div>)
                }

            </div>

            <div className="container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleCart={handleCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;