import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    return (
        <div>
            <h1>Wottle</h1>
            <h3>Total Bottles:{bottles.length}</h3>
            <div className="container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;