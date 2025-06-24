import { useParams } from "react-router-dom"
import products from "/root/UTN-Project/UTN-Project/data/products.json";

const ProductDetail = ({onAddToCart}) => {
    const {id} = useParams();
    const product = products.products.find(producto => producto.id === parseInt(id));

    return(
        <div class="product">
            <h1>Producto Destacado</h1>
            <div class="product-details">
                <div class="product-image">
                    <img src={product.image} alt="imagen de producto" />
                </div>
                <div class="product-info">
                    <h2>{product.name}</h2>
                    <div class="product-rating">⭐⭐⭐⭐☆ ({product.calificación}) · {product.opiniones} opiniones</div>
                    <p>{product.description}</p>

                    <p class="stock">En stock</p>
                    <p class="discount">¡{product.discount}% de descuento por tiempo limitado!</p>
                    <p class="price">${product.price} <del style="color:#888; font-size: 1rem;">${product.oldPrice}</del></p>

                    <label for="size">Tamaño:</label>
                    <select id="size" name="size">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>

                    <ul class="specs">
                        <li>Material: Algodón 100%</li>
                        <li>Peso: 500g</li>
                        <li>Fabricado en: España</li>
                    </ul>

                    <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;