import './bottle.css'

const Bottle = ({bottle,handleCart}) => {
    console.log(bottle)
    const {name,img,price} = bottle
    return (
        <div className="box"> 
            <h4>{name}</h4>
            <img src={img} alt="" />
            <p>price:${price}</p>
            <button onClick={()=>handleCart(bottle)}>Buy</button>
        </div>
    );
};

export default Bottle;