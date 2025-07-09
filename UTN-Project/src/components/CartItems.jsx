import { removeFromCart, clearCart } from "../hooks/cartSlice";


const CartItems = ({user, items, total, dispatch }) => {
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
                        <tr key={`${item.name}-${item.color}`} className="cart-item-row">
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
                    if (!user) {
                        
                    }
                }}>Comprar</button>
                <Link to="/" className="btn-continue">Seguir comprando</Link> 
            </div>
        </>
    );
}

export default CartItems;