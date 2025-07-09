import EmptyCart from './EmptyCart.jsx';
import CartItems from './CartItems.jsx';

const Cart = ({user, items, total, dispatch }) => {
    
    return (
        <main className="cart-page container">
            <h1 className="cart-title" style={{textDecoration: "underline"}}>Tu carrito:</h1>

            {items.length === 0 ? (
                <EmptyCart />
            ) : (
                <CartItems items={items} total={total} dispatch={dispatch} />
            )}
        </main>
    );
};

export default Cart;