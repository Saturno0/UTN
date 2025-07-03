import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useState } from 'react';

const ProductDetail = ({ product }) => {
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState(product.colores);
    console.log(quantities);

    const handleQuantityChange = (color, value) => {
        setQuantities({
            ...quantities,
            [color]: parseInt(value) || 0
        });
    };
    
    return (
        <div className="product">
            <h1>Producto Destacado</h1>
            <div className="product-details">
                <div className="product-image">
                    <img src={product.imagen} alt={product.nombre} />
                </div>
                <div className="product-info">
                    <h2>{product.nombre}</h2>
                    <div className="product-rating">
                        ⭐⭐⭐⭐☆ ({product.calificación}) · {product.opiniones} opiniones
                    </div>
                    <p>{product.descripción}</p>

                    {product.stock ? <p className="stock">En stock</p> : <p className="stock">Sin stock</p>}
                    {product.descuento > 0 && (
                        <p className="discount">¡{product.descuento}% de descuento por tiempo limitado!</p>
                    )}

                    <p className="price">
                        ${product.precio_actual}{" "}
                        {product.precio_actual !== product.precio_original && (
                            <del style={{ color: "#888", fontSize: "1rem" }}>${product.precio_original}</del>
                        )}
                    </p>

                    <label htmlFor="size">Tamaño:</label>
                    <select id="size" name="size">
                        {product.tamaños.map((t) => (
                            <option key={t}>{t}</option>
                        ))}
                    </select>

                    <ul className="specs">
                        <li>Material: {product.especificaciones.material}</li>
                        <li>Peso: {product.especificaciones.peso}</li>
                        <li>Fabricado en: {product.especificaciones.fabricado_en}</li>
                    </ul>

                    <table className="color-table">
                        <thead>
                            <tr>
                                <th>COLOR</th>
                                <th>CANTIDAD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quantities.map((color) => (
                                <tr key={color}>
                                    <td>{color}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="0"
                                            value={quantities[color]}
                                            onChange={(e) => handleQuantityChange(color, e.target.value)}
                                        />
                                        <span className="stock-status">Hay existencias</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button onClick={() => dispatch(addToCart(product.id))}>Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};


export default ProductDetail;

