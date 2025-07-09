import { removeFromCart, clearCart } from "../hooks/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const CartItems = ({ items, total, dispatch }) => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=> {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [])
    
    return(
        <>
            <table className="cart-table" id="cart-table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Color</th>
                        <th>Cantidad</th>
                        <th>Precio unidad</th>
                        <th>Precio final</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={`${item.id}-${item.name}-${item.color}`} className="cart-item-row">
                            <td>{item.name}</td>
                            <td>{item.color}</td>
                            <td>{item.quantity}</td>
                            <td>${item.precio_actual || 100}</td>
                            <td>${(item.precio_actual || 100) * item.quantity}</td>
                            <td>
                                <button className="btn-remove" onClick={() => dispatch(removeFromCart(item))}>
                                    Quitar uno
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="cart-summary" id="cart-summary">
                <h2>Total: ${total}</h2>
                <button className="btn-clear" onClick={() => dispatch(clearCart())}>Vaciar carrito</button>
            </div>

            <div className="cart-actions">
                <button className="btn-buy" onClick={() => {
                    if (!user.isRegistered) {
                        navigate('/login');
                    } else {
                        navigate('/checkout');
                    }
                }}>
                    Comprar
                </button>
                
                <Link to="/" className="btn-continue">Seguir comprando</Link> 
            </div>
        </>
    );
}

export default CartItems;