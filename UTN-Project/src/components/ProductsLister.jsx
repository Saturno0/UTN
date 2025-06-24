import ProductInfo from "./ProductInfo";
import PropsTypes from 'prop-types';

const ProductsLister = ( {productos} ) => {
    return (
        productos.map((producto, i) => (
            <ProductInfo key={i} producto={producto} />
        ))
    );
}

ProductsLister.propTypes = {
    productos: PropsTypes.arrayOf(
        PropsTypes.shape({
            nombre: PropsTypes.string.isRequired,
            imagen: PropsTypes.string.isRequired,
            descripcion: PropsTypes.string.isRequired,
            precio: PropsTypes.number.isRequired
        })
    ).isRequired
};

export default ProductsLister;